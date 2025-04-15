import React, { createContext, useContext, useState, useEffect } from 'react';

const PropertiesContext = createContext();

export const PropertiesProvider = ({ children }) => {
    const [properties, setProperties] = useState([]);
    const [agents, setAgents] = useState([]);

    // Load initial data from localStorage or JSON files
    useEffect(() => {
        const loadInitialData = async () => {
            try {
                // Try to load properties from localStorage first
                const savedProperties = JSON.parse(localStorage.getItem('properties')) || [];
                if (savedProperties.length > 0) {
                    setProperties(savedProperties);
                } else {
                    // If no data in localStorage, load from JSON file
                    const propertiesResponse = await fetch("../../assets/Data/properties.json");
                    const propertiesData = await propertiesResponse.json();
                    setProperties(propertiesData.properties);
                    localStorage.setItem('properties', JSON.stringify(propertiesData.properties));
                }

                // Try to load agents from localStorage first
                const savedAgents = JSON.parse(localStorage.getItem('agents')) || [];
                if (savedAgents.length > 0) {
                    setAgents(savedAgents);
                } else {
                    // If no data in localStorage, load from JSON file
                    const agentsResponse = await fetch("/public/data/agents.json");
                    const agentsData = await agentsResponse.json();
                    setAgents(agentsData.agents);
                    localStorage.setItem('agents', JSON.stringify(agentsData.agents));
                }
            } catch (error) {
                console.error("Error loading initial data:", error);
            }
        };

        loadInitialData();
    }, []);

    const addProperty = async (property) => {
        try {
            const newProperties = [...properties, property];
            setProperties(newProperties);
            localStorage.setItem('properties', JSON.stringify(newProperties));
            return true;
        } catch (error) {
            console.error("Error adding property:", error);
            return false;
        }
    };

    const editProperty = async (id, updatedProperty) => {
        try {
            const newProperties = properties.map((property) =>
                property.id === id ? { ...property, ...updatedProperty } : property
            );
            setProperties(newProperties);
            localStorage.setItem('properties', JSON.stringify(newProperties));
            return true;
        } catch (error) {
            console.error("Error editing property:", error);
            return false;
        }
    };

    const deleteProperty = async (id) => {
        try {
            const newProperties = properties.filter((property) => property.id !== id);
            setProperties(newProperties);
            localStorage.setItem('properties', JSON.stringify(newProperties));
            return true;
        } catch (error) {
            console.error("Error deleting property:", error);
            return false;
        }
    };

    const addAgent = async (agent) => {
        try {
            const newAgents = [...agents, agent];
            setAgents(newAgents);
            localStorage.setItem('agents', JSON.stringify(newAgents));
            return true;
        } catch (error) {
            console.error("Error adding agent:", error);
            return false;
        }
    };

    const editAgent = async (id, updatedAgent) => {
        try {
            const newAgents = agents.map((agent) =>
                agent.id === id ? { ...agent, ...updatedAgent } : agent
            );
            setAgents(newAgents);
            localStorage.setItem('agents', JSON.stringify(newAgents));
            return true;
        } catch (error) {
            console.error("Error editing agent:", error);
            return false;
        }
    };

    const deleteAgent = async (id) => {
        try {
            const newAgents = agents.filter((agent) => agent.id !== id);
            setAgents(newAgents);
            localStorage.setItem('agents', JSON.stringify(newAgents));
            return true;
        } catch (error) {
            console.error("Error deleting agent:", error);
            return false;
        }
    };

    return (
        <PropertiesContext.Provider
            value={{
                properties,
                agents,
                addProperty,
                editProperty,
                deleteProperty,
                addAgent,
                editAgent,
                deleteAgent,
            }}
        >
            {children}
        </PropertiesContext.Provider>
    );
};

export const useProperties = () => {
    const context = useContext(PropertiesContext);
    if (!context) {
        throw new Error("useProperties must be used within a PropertiesProvider");
    }
    return context;
}; 