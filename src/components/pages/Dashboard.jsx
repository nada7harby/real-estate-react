import React, { useState, useEffect } from 'react';
import {
  Box,
  Container,
  Grid,
  Card,
  CardContent,
  Typography,
  Avatar,
  IconButton,
  Button,
  Divider,
  List,
  ListItem,
  ListItemText,
  ListItemAvatar,
  LinearProgress,
  TextField,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  MenuItem
} from '@mui/material';
import {
  Home,
  Person,
  AttachMoney,
  TrendingUp,
  Message,
  Visibility,
  Edit,
  Delete,
  Add,
  Save,
  Cancel,
} from '@mui/icons-material';

export default function Dashboard() {
  const [data, setData] = useState({
    properties: [],
    agents: []
  });
  const [openModal, setOpenModal] = useState(false);
  const [newProperty, setNewProperty] = useState({
    id: 0,
    title: '',
    price: '',
    status: '',
    image: '/images/default-property.jpg'
  });
  const [editingId, setEditingId] = useState(null);
  const [editForm, setEditForm] = useState({
    title: '',
    price: '',
    status: '',
  });

  // Load data from JSON file
  useEffect(() => {
    fetch('/data/data.json')
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => {
        setData(data);
        // Generate new ID for adding properties
        const maxId = Math.max(...data.properties.map(p => p.id), 0);
        setNewProperty(prev => ({ ...prev, id: maxId + 1 }));
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []);

  // Save data to JSON file (simulated)
  const saveData = (updatedData) => {
    // In a real app, you would send this to a backend
    // For demo, we'll just update the state
    setData(updatedData);
    console.log('Data updated (would save to JSON in real app):', updatedData);
  };

  const handleAddProperty = () => {
    const updatedProperties = [...data.properties, newProperty];
    const updatedData = { ...data, properties: updatedProperties };
    saveData(updatedData);
    
    // Reset form and close modal
    setNewProperty({
      id: newProperty.id + 1,
      title: '',
      price: '',
      status: '',
      image: '/images/default-property.jpg'
    });
    setOpenModal(false);
  };

  const handleDelete = (id) => {
    const updatedProperties = data.properties.filter(property => property.id !== id);
    const updatedData = { ...data, properties: updatedProperties };
    saveData(updatedData);
  };

  const handleEdit = (property) => {
    setEditingId(property.id);
    setEditForm({
      title: property.title,
      price: property.price,
      status: property.status,
    });
  };

  const handleSave = (id) => {
    const updatedProperties = data.properties.map(property => 
      property.id === id ? { ...property, ...editForm } : property
    );
    const updatedData = { ...data, properties: updatedProperties };
    saveData(updatedData);
    setEditingId(null);
  };

  const handleCancel = () => {
    setEditingId(null);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEditForm(prev => ({ ...prev, [name]: value }));
  };

  const handleNewPropertyChange = (e) => {
    const { name, value } = e.target;
    setNewProperty(prev => ({ ...prev, [name]: value }));
  };

  return (
    <Box sx={{ py: 4 }}>
      <Container maxWidth="xl">
        {/* Header */}
        <Box sx={{ mb: 4, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <Typography variant="h4" component="h1" gutterBottom>
            Dashboard
          </Typography>
          <Button
            variant="contained"
            startIcon={<Add />}
            sx={{ backgroundColor: 'var(--global-color-primary)' }}
            onClick={() => setOpenModal(true)}
          >
            Add New Property
          </Button>
        </Box>

        {/* Stats Cards */}
        <Grid container spacing={3} sx={{ mb: 4 }}>
          {[
            { title: 'Total Properties', value: data.properties.length, icon: <Home />, color: '#1db2ff' },
            { title: 'Total Agents', value: data.agents.length, icon: <Person />, color: '#4CAF50' },
            { title: 'Total Revenue', value: '$2.4M', icon: <AttachMoney />, color: '#FFC107' },
            { title: 'Monthly Views', value: '8.2K', icon: <Visibility />, color: '#FF5722' },
          ].map((stat) => (
            <Grid item xs={12} sm={6} md={3} key={stat.title}>
              <Card sx={{ height: '100%' }}>
                <CardContent sx={{ 
                  display: 'flex', 
                  alignItems: 'center', 
                  justifyContent: 'space-between',
                  '&:hover': { backgroundColor: 'rgba(29, 178, 255, 0.1)' }
                }}>
                  <Box>
                    <Typography color="textSecondary" gutterBottom>
                      {stat.title}
                    </Typography>
                    <Typography variant="h4" component="div">
                      {stat.value}
                    </Typography>
                  </Box>
                  <Avatar sx={{ bgcolor: stat.color }}>
                    {stat.icon}
                  </Avatar>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>

        {/* Main Content */}
        <Grid container spacing={3}>
          {/* Recent Properties */}
          <Grid item xs={12} lg={9}>
            <Card>
              <CardContent>
                <Typography variant="h6" gutterBottom>
                  Recent Properties
                </Typography>
                <List>
                  {data.properties.map((property) => (
                    <React.Fragment key={property.id}>
                      <ListItem
                        secondaryAction={
                          <Box>
                            {editingId === property.id ? (
                              <>
                                <IconButton edge="end" aria-label="save" onClick={() => handleSave(property.id)}>
                                  <Save />
                                </IconButton>
                                <IconButton edge="end" aria-label="cancel" onClick={handleCancel}>
                                  <Cancel />
                                </IconButton>
                              </>
                            ) : (
                              <>
                                <IconButton edge="end" aria-label="edit" onClick={() => handleEdit(property)}>
                                  <Edit />
                                </IconButton>
                                <IconButton edge="end" aria-label="delete" onClick={() => handleDelete(property.id)}>
                                  <Delete />
                                </IconButton>
                              </>
                            )}
                          </Box>
                        }
                      >
                        <ListItemAvatar>
                          <Avatar 
                            variant="rounded" 
                            src={property.image}
                            sx={{ width: 56, height: 56, mr: 2 }}
                          />
                        </ListItemAvatar>
                        {editingId === property.id ? (
                          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2, width: '100%' }}>
                            <TextField
                              name="title"
                              value={editForm.title}
                              onChange={handleInputChange}
                              size="small"
                              fullWidth
                            />
                            <TextField
                              name="price"
                              value={editForm.price}
                              onChange={handleInputChange}
                              size="small"
                              fullWidth
                            />
                            <TextField
                              name="status"
                              value={editForm.status}
                              onChange={handleInputChange}
                              size="small"
                              fullWidth
                            />
                          </Box>
                        ) : (
                          <ListItemText
                            primary={property.title}
                            secondary={
                              <React.Fragment>
                                <Typography component="span" variant="body2" color="text.primary">
                                  {property.price}
                                </Typography>
                                {` — ${property.status}`}
                              </React.Fragment>
                            }
                          />
                        )}
                      </ListItem>
                      <Divider variant="inset" component="li" />
                    </React.Fragment>
                  ))}
                </List>
              </CardContent>
            </Card>
          </Grid>

          {/* Top Agents */}
          <Grid item xs={12} lg={3}>
            <Card>
              <CardContent>
                <Typography variant="h6" gutterBottom>
                  Top Performing Agents
                </Typography>
                <List>
                  {data.agents.map((agent, index) => (
                    <React.Fragment key={agent.name}>
                      <ListItem alignItems="flex-start">
                        <ListItemAvatar>
                          <Avatar src={agent.avatar} />
                        </ListItemAvatar>
                        <ListItemText
                          primary={agent.name}
                          secondary={
                            <React.Fragment>
                              <Typography component="span" variant="body2" color="text.primary">
                                {agent.sales} sales
                              </Typography>
                              {` — Revenue: ${agent.revenue}`}
                              <LinearProgress 
                                variant="determinate" 
                                value={((index + 1) / data.agents.length) * 100}
                                sx={{ mt: 1 }}
                              />
                            </React.Fragment>
                          }
                        />
                      </ListItem>
                      <Divider variant="inset" component="li" />
                    </React.Fragment>
                  ))}
                </List>
              </CardContent>
            </Card>
          </Grid>
        </Grid>

        {/* Add Property Modal */}
        <Dialog open={openModal} onClose={() => setOpenModal(false)}>
          <DialogTitle>Add New Property</DialogTitle>
          <DialogContent>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2, mt: 2 }}>
              <TextField
                label="Title"
                name="title"
                value={newProperty.title}
                onChange={handleNewPropertyChange}
                fullWidth
              />
              <TextField
                label="Price"
                name="price"
                value={newProperty.price}
                onChange={handleNewPropertyChange}
                fullWidth
              />
              <TextField
                select
                label="Status"
                name="status"
                value={newProperty.status}
                onChange={handleNewPropertyChange}
                fullWidth
              >
                <MenuItem value="For Sale">For Sale</MenuItem>
                <MenuItem value="For Rent">For Rent</MenuItem>
                <MenuItem value="Sold">Sold</MenuItem>
              </TextField>
              <TextField
                label="Image URL"
                name="image"
                value={newProperty.image}
                onChange={handleNewPropertyChange}
                fullWidth
              />
            </Box>
          </DialogContent>
          <DialogActions>
            <Button onClick={() => setOpenModal(false)}>Cancel</Button>
            <Button 
              onClick={handleAddProperty}
              variant="contained"
              disabled={!newProperty.title || !newProperty.price || !newProperty.status}
            >
              Add Property
            </Button>
          </DialogActions>
        </Dialog>
      </Container>
    </Box>
  );
}