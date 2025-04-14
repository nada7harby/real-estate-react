import React, { createContext, useContext, useState, useEffect } from 'react';

const PropertiesContext = createContext();

export const PropertiesProvider = ({ children }) => {
    const [properties, setProperties] = useState([]);
    const [agents, setAgents] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    // Load initial data
    useEffect(() => {
        fetch("/data/properties.json")
            .then((response) => {
                if (!response.ok) {
                    throw new Error("Network response was not ok");
                }
                return response.json();
            })
            .then((data) => {
                setProperties(data.properties);
                setAgents(data.agents);
                setLoading(false);
            })
            .catch((error) => {
                console.error("Error fetching data:", error);
                setError(error.message);
                setLoading(false);
            });
    }, []);

    // Function to update properties.json file
    const updatePropertiesFile = async (newData) => {
        try {
            const response = await fetch('/data/properties.json', {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(newData)
            });

            if (!response.ok) {
                throw new Error('Failed to update properties file');
            }

            return true;
        } catch (error) {
            console.error('Error updating properties file:', error);
            return false;
        }
    };

    // Add new property
    const addProperty = async (newProperty) => {
        const newId = `RH-${new Date().getFullYear()}-${Math.floor(Math.random() * 1000).toString().padStart(3, "0")}`;
        const propertyWithId = { ...newProperty, id: newId };
        const updatedProperties = [...properties, propertyWithId];
        
        const success = await updatePropertiesFile({
            properties: updatedProperties,
            agents: agents
        });

        if (success) {
            setProperties(updatedProperties);
            return true;
        }
        return false;
    };

    // Edit property
    const editProperty = async (id, updatedProperty) => {
        const updatedProperties = properties.map(property =>
            property.id === id ? { ...property, ...updatedProperty } : property
        );

        const success = await updatePropertiesFile({
            properties: updatedProperties,
            agents: agents
        });

        if (success) {
            setProperties(updatedProperties);
            return true;
        }
        return false;
    };

    // Delete property
    const deleteProperty = async (id) => {
        const updatedProperties = properties.filter(property => property.id !== id);
        
        const success = await updatePropertiesFile({
            properties: updatedProperties,
            agents: agents
        });

        if (success) {
            setProperties(updatedProperties);
            return true;
        }
        return false;
    };

    return (
        <PropertiesContext.Provider value={{
            properties,
            agents,
            loading,
            error,
            addProperty,
            editProperty,
            deleteProperty
        }}>
            {children}
        </PropertiesContext.Provider>
    );
};

export const useProperties = () => {
    const context = useContext(PropertiesContext);
    if (!context) {
        throw new Error('useProperties must be used within a PropertiesProvider');
    }
    return context;
}; 