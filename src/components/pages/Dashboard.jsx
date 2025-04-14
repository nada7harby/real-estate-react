import React, { useState, useEffect } from "react";
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
  MenuItem,
  Chip,
  Rating,
  FormControl,
  InputLabel,
  Select,
  Checkbox,
  FormControlLabel,
  FormGroup,
  FormHelperText,
} from "@mui/material";
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
  LocationOn,
  Bed,
  Bathtub,
  Garage,
  Email,
  Phone,
  Star,
} from "@mui/icons-material";
import Swal from "sweetalert2";
import { useProperties } from "../common/PropertiesContext";

export default function Dashboard() {
  const {
    properties,
    agents,
    addProperty,
    editProperty,
    deleteProperty,
  } = useProperties();
  const [openModal, setOpenModal] = useState(false);
  const [editingId, setEditingId] = useState(null);
  const [editForm, setEditForm] = useState({
    title: "",
    price: "",
    status: "",
    type: "",
    address: "",
  });
  const [newProperty, setNewProperty] = useState({
    id: "",
    title: "",
    price: "",
    address: "",
    type: "",
    status: "",
    yearBuilt: "",
    images: [],
    overview: {
      bathrooms: "",
      bedrooms: "",
      garage: "",
      area: "",
      lotSize: "",
    },
    description: "",
    additionalDetails: [],
    propertiesCommonNotes: "",
    features: {
      stories: "",
      HomeTheater: false,
      Lawn: false,
      marbleFloors: false,
    },
    video: "",
  });
  const [errors, setErrors] = useState({});
  const [paymentCount, setPaymentCount] = useState(0);

  useEffect(() => {
    const fetchPaymentCount = async () => {
      try {
        const res = await fetch(
          "https://apireactjsproject-production.up.railway.app/payment-count"
        );
        const data = await res.json();
        setPaymentCount(data.count);
      } catch (error) {
        console.error("Error fetching payment count:", error);
      }
    };

    fetchPaymentCount();
    const interval = setInterval(fetchPaymentCount, 5000);
    return () => clearInterval(interval);
  }, []);

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;

    if (editingId) {
      // Handle edit form changes
      setEditForm((prev) => ({
        ...prev,
        [name]: type === "checkbox" ? checked : value,
      }));
    } else {
      // Handle new property form changes
      if (name.includes(".")) {
        const [parent, child] = name.split(".");
        setNewProperty((prev) => ({
          ...prev,
          [parent]: {
            ...prev[parent],
            [child]: type === "checkbox" ? checked : value,
          },
        }));
      } else {
        setNewProperty((prev) => ({
          ...prev,
          [name]: type === "checkbox" ? checked : value,
        }));
      }
    }
  };

  const handleEdit = (property) => {
    setEditingId(property.id);
    setEditForm({
      title: property.title,
      price: property.price,
      status: property.status,
      type: property.type,
      address: property.address,
    });
  };

  const handleCancel = () => {
    setEditingId(null);
  };

  const handleDelete = async (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
      cancelButtonText: "Cancel",
    }).then(async (result) => {
      if (result.isConfirmed) {
        const success = await deleteProperty(id);
        if (success) {
          Swal.fire("Deleted!", "The property has been deleted.", "success");
        } else {
          Swal.fire("Error!", "Failed to delete the property.", "error");
        }
      }
    });
  };

  const handleSave = async (id) => {
    const success = await editProperty(id, editForm);
    if (success) {
      setEditingId(null);
      Swal.fire("Updated!", "The property has been updated.", "success");
    } else {
      Swal.fire("Error!", "Failed to update the property.", "error");
    }
  };

  const validateForm = () => {
    const newErrors = {};

    // Required fields validation
    if (!newProperty.title.trim()) {
      newErrors.title = "Title is required";
    }
    if (!newProperty.price.trim()) {
      newErrors.price = "Price is required";
    } else if (isNaN(Number(newProperty.price.replace(/[^0-9]/g, "")))) {
      newErrors.price = "Price must be a valid number";
    }
    if (!newProperty.address.trim()) {
      newErrors.address = "Address is required";
    }
    if (!newProperty.type) {
      newErrors.type = "Property type is required";
    }
    if (!newProperty.status) {
      newErrors.status = "Status is required";
    }
    if (!newProperty.yearBuilt) {
      newErrors.yearBuilt = "Year built is required";
    } else if (
      isNaN(newProperty.yearBuilt) ||
      newProperty.yearBuilt < 1800 ||
      newProperty.yearBuilt > new Date().getFullYear()
    ) {
      newErrors.yearBuilt = "Please enter a valid year";
    }

    // Overview validation
    if (!newProperty.overview.bedrooms) {
      newErrors["overview.bedrooms"] = "Number of bedrooms is required";
    } else if (
      isNaN(newProperty.overview.bedrooms) ||
      newProperty.overview.bedrooms < 0
    ) {
      newErrors["overview.bedrooms"] = "Please enter a valid number";
    }
    if (!newProperty.overview.bathrooms) {
      newErrors["overview.bathrooms"] = "Number of bathrooms is required";
    } else if (
      isNaN(newProperty.overview.bathrooms) ||
      newProperty.overview.bathrooms < 0
    ) {
      newErrors["overview.bathrooms"] = "Please enter a valid number";
    }
    if (!newProperty.overview.area) {
      newErrors["overview.area"] = "Area is required";
    } else if (
      isNaN(newProperty.overview.area) ||
      newProperty.overview.area < 0
    ) {
      newErrors["overview.area"] = "Please enter a valid area";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleAddProperty = async () => {
    if (!validateForm()) {
      Swal.fire(
        "Error!",
        "Please fill in all required fields correctly.",
        "error"
      );
      return;
    }

    const success = await addProperty(newProperty);
    if (success) {
      setNewProperty({
        id: "",
        title: "",
        price: "",
        address: "",
        type: "",
        status: "",
        yearBuilt: "",
        images: [],
        overview: {
          bathrooms: "",
          bedrooms: "",
          garage: "",
          area: "",
          lotSize: "",
        },
        description: "",
        additionalDetails: [],
        propertiesCommonNotes: "",
        features: {
          stories: "",
          HomeTheater: false,
          Lawn: false,
          marbleFloors: false,
        },
        video: "",
      });
      setErrors({});
      setOpenModal(false);
      Swal.fire("Success!", "New property has been added.", "success");
    } else {
      Swal.fire("Error!", "Failed to add the property.", "error");
    }
  };

  // Update the form fields to show errors
  const getError = (fieldName) => {
    return errors[fieldName] || "";
  };

  return (
    <Box sx={{ py: 4 }}>
      <Container maxWidth="xl">
        {/* Header */}
        <Box
          sx={{
            mb: 4,
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Typography variant="h4" component="h1" gutterBottom>
            Dashboard
          </Typography>
          <Button
            variant="contained"
            startIcon={<Add />}
            sx={{ backgroundColor: "var(--global-color-primary)" }}
            onClick={() => setOpenModal(true)}
          >
            Add New Property
          </Button>
        </Box>

        {/* Stats Cards */}
        <Grid
          container
          spacing={3}
          sx={{
            mb: 4,
            display: "flex",
            justifyContent: "center",
            flexDirection: { xs: "column", md: "row" },
          }}
        >
          {[
            {
              title: "Total Properties",
              value: properties.length,
              icon: <Home />,
              color: "#1db2ff",
            },
            {
              title: "Total Value",
              value: properties
                .reduce(
                  (sum, p) => sum + parseInt(p.price.replace(/[^0-9]/g, "")),
                  0
                )
                .toLocaleString("en-US", {
                  style: "currency",
                  currency: "USD",
                }),
              icon: <AttachMoney />,
              color: "#4CAF50",
            },
            {
              title: "Property Types",
              value: [...new Set(properties.map((p) => p.type))].length,
              icon: <Home />,
              color: "#FF5722",
            },
            {
              title: "Total Agents",
              value: agents.length,
              icon: <Person />,
              color: "#9C27B0",
            },
           
            {
              title: "Successful Payments",
              value: paymentCount,
              icon: <AttachMoney />,
              color: "#2196F3",
            },
          ].map((stat) => (
            <Grid item xs={12} sm={6} md={3} key={stat.title}>
              <Card sx={{ height: "100%" }}>
                <CardContent
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    "&:hover": { backgroundColor: "rgba(29, 178, 255, 0.1)" },
                  }}
                >
                  <Box>
                    <Typography color="textSecondary" gutterBottom>
                      {stat.title}
                    </Typography>
                    <Typography variant="h4" component="div">
                      {stat.value}
                    </Typography>
                  </Box>
                  <Avatar sx={{ bgcolor: stat.color }}>
                    {React.isValidElement(stat.icon)
                      ? React.cloneElement(stat.icon, {
                          style: { color: "white" },
                        })
                      : stat.icon}
                  </Avatar>{" "}
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>

        <div className="flex justify-around flex-col lg:flex-row">
          {" "}
          {/* Properties List */}
          <Grid
            container
            spacing={3}
            sx={{
              mb: 4,
              width: { md: "100%", lg: "50%" },
              flexDirection: { xs: "column", md: "row" },
            }}
          >
            <Grid item xs={12} sx={{ width: "100%" }}>
            <Card>
              <CardContent>
                <Typography variant="h6" gutterBottom>
                    Properties List
                </Typography>
                <List>
                    {properties.map((property) => (
                    <React.Fragment key={property.id}>
                      <ListItem
                        secondaryAction={
                          <Box>
                            {editingId === property.id ? (
                              <>
                                  <IconButton
                                    edge="end"
                                    aria-label="save"
                                    onClick={() => handleSave(property.id)}
                                  >
                                  <Save />
                                </IconButton>
                                  <IconButton
                                    edge="end"
                                    aria-label="cancel"
                                    onClick={handleCancel}
                                  >
                                  <Cancel />
                                </IconButton>
                              </>
                            ) : (
                              <>
                                  <IconButton
                                    edge="end"
                                    aria-label="edit"
                                    onClick={() => handleEdit(property)}
                                  >
                                  <Edit />
                                </IconButton>
                                  <IconButton
                                    edge="end"
                                    aria-label="delete"
                                    onClick={() => handleDelete(property.id)}
                                    sx={{ color: "error.main" }}
                                  >
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
                              src={property.images[0]}
                              sx={{ width: 100, height: 100, mr: 2 }}
                          />
                        </ListItemAvatar>
                        {editingId === property.id ? (
                            <Box
                              sx={{
                                display: "flex",
                                flexDirection: "column",
                                gap: 2,
                                width: "100%",
                              }}
                            >
                            <TextField
                              name="title"
                                label="Title"
                              value={editForm.title}
                              onChange={handleInputChange}
                              size="small"
                              fullWidth
                            />
                            <TextField
                              name="price"
                                label="Price"
                              value={editForm.price}
                              onChange={handleInputChange}
                              size="small"
                              fullWidth
                            />
                            <TextField
                              name="status"
                                label="Status"
                              value={editForm.status}
                              onChange={handleInputChange}
                              size="small"
                              fullWidth
                            />
                              <TextField
                                name="type"
                                label="Type"
                                value={editForm.type}
                                onChange={handleInputChange}
                                size="small"
                                fullWidth
                              />
                              <TextField
                                name="address"
                                label="Address"
                                value={editForm.address}
                              onChange={handleInputChange}
                              size="small"
                              fullWidth
                            />
                          </Box>
                        ) : (
                          <ListItemText
                              primary={
                                <Box
                                  sx={{
                                    display: "flex",
                                    alignItems: "center",
                                    gap: 1,
                                  }}
                                >
                                  <Typography variant="h6">
                                    {property.title}
                                  </Typography>
                                  <Chip
                                    label={property.status}
                                    color={
                                      property.status === "For Sale"
                                        ? "primary"
                                        : "secondary"
                                    }
                                    size="small"
                                  />
                                </Box>
                              }
                            secondary={
                              <React.Fragment>
                                  <Box
                                    sx={{
                                      display: "flex",
                                      alignItems: "center",
                                      gap: 1,
                                      mb: 1,
                                    }}
                                  >
                                    <Typography
                                      component="span"
                                      variant="body1"
                                      color="primary"
                                      sx={{ fontWeight: "bold" }}
                                    >
                                  {property.price}
                                </Typography>
                                    <Typography
                                      component="span"
                                      variant="body2"
                                      color="text.secondary"
                                    >
                                      {property.type}
                                    </Typography>
                                  </Box>
                                  <Box
                                    sx={{
                                      display: "flex",
                                      alignItems: "center",
                                      gap: 1,
                                      mb: 1,
                                    }}
                                  >
                                    <LocationOn
                                      fontSize="small"
                                      color="action"
                                    />
                                    <Typography
                                      variant="body2"
                                      color="text.secondary"
                                    >
                                      {property.address}
                                    </Typography>
                                  </Box>
                                  <Box
                                    sx={{
                                      display: "flex",
                                      alignItems: "center",
                                      gap: 2,
                                    }}
                                  >
                                    <Box
                                      sx={{
                                        display: "flex",
                                        alignItems: "center",
                                        gap: 0.5,
                                      }}
                                    >
                                      <Bed fontSize="small" color="action" />
                                      <Typography variant="body2">
                                        {property.overview.bedrooms} Beds
                                      </Typography>
                                    </Box>
                                    <Box
                                      sx={{
                                        display: "flex",
                                        alignItems: "center",
                                        gap: 0.5,
                                      }}
                                    >
                                      <Bathtub
                                        fontSize="small"
                                        color="action"
                                      />
                                      <Typography variant="body2">
                                        {property.overview.bathrooms} Baths
                                      </Typography>
                                    </Box>
                                    <Box
                                      sx={{
                                        display: "flex",
                                        alignItems: "center",
                                        gap: 0.5,
                                      }}
                                    >
                                      <Garage fontSize="small" color="action" />
                                      <Typography variant="body2">
                                        {property.overview.garage} Garage
                                      </Typography>
                                    </Box>
                                    <Box
                                      sx={{
                                        display: "flex",
                                        alignItems: "center",
                                        gap: 0.5,
                                      }}
                                    >
                                      <Home fontSize="small" color="action" />
                                      <Typography variant="body2">
                                        {property.overview.area} sqft
                                      </Typography>
                                    </Box>
                                  </Box>
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
          </Grid>
          {/* Agents List */}
          <Grid container spacing={3}>
            <Grid item xs={12}>
            <Card>
              <CardContent>
                <Typography variant="h6" gutterBottom>
                    Agents List
                </Typography>
                <List>
                    {agents.map((agent) => (
                      <React.Fragment key={agent.id}>
                        <ListItem
                          secondaryAction={
                            <Box>
                              <IconButton edge="end" aria-label="message">
                                <Message />
                              </IconButton>
                            </Box>
                          }
                        >
                        <ListItemAvatar>
                            <Avatar
                              src={agent.image}
                              sx={{ width: 80, height: 80, mr: 2 }}
                            />
                        </ListItemAvatar>
                        <ListItemText
                            primary={
                              <Box
                                sx={{
                                  display: "flex",
                                  alignItems: "center",
                                  gap: 1,
                                }}
                              >
                                <Typography variant="h6">
                                  {agent.name}
                                </Typography>
                                <Chip label={agent.position} size="small" />
                              </Box>
                            }
                          secondary={
                            <React.Fragment>
                                <Box
                                  sx={{
                                    display: "flex",
                                    alignItems: "center",
                                    gap: 1,
                                    mb: 1,
                                  }}
                                >
                                  <Email fontSize="small" color="action" />
                                  <Typography
                                    variant="body2"
                                    color="text.secondary"
                                  >
                                    {agent.email}
                                  </Typography>
                                </Box>
                                <Box
                                  sx={{
                                    display: "flex",
                                    alignItems: "center",
                                    gap: 1,
                                    mb: 1,
                                  }}
                                >
                                  <Phone fontSize="small" color="action" />
                                  <Typography
                                    variant="body2"
                                    color="text.secondary"
                                  >
                                    {agent.phone}
                              </Typography>
                                </Box>
                                <Box
                                  sx={{
                                    display: "flex",
                                    alignItems: "center",
                                    gap: 2,
                                  }}
                                >
                                  <Box
                                    sx={{
                                      display: "flex",
                                      alignItems: "center",
                                      gap: 0.5,
                                    }}
                                  >
                                    <Rating
                                      value={agent.rating}
                                      precision={0.1}
                                      readOnly
                                      size="small"
                                    />
                                    <Typography
                                      variant="body2"
                                      color="text.secondary"
                                    >
                                      ({agent.reviews} reviews)
                                    </Typography>
                                  </Box>
                                  <Box
                                    sx={{
                                      display: "flex",
                                      alignItems: "center",
                                      gap: 0.5,
                                    }}
                                  >
                                    <Home fontSize="small" color="action" />
                                    <Typography variant="body2">
                                      {agent.properties.length} Properties
                                    </Typography>
                                  </Box>
                                </Box>
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
        </div>
        {/* Add Property Modal */}
        <Dialog
          open={openModal}
          onClose={() => setOpenModal(false)}
          maxWidth="md"
          fullWidth
        >
          <DialogTitle>Add New Property</DialogTitle>
          <DialogContent>
            <Box
              sx={{ display: "flex", flexDirection: "column", gap: 2, mt: 2 }}
            >
              <TextField
                label="Title"
                name="title"
                value={newProperty.title}
                onChange={handleInputChange}
                error={!!errors.title}
                helperText={getError("title")}
                fullWidth
                required
              />
              <TextField
                label="Price"
                name="price"
                value={newProperty.price}
                onChange={handleInputChange}
                error={!!errors.price}
                helperText={getError("price")}
                fullWidth
                required
              />
              <TextField
                label="Address"
                name="address"
                value={newProperty.address}
                onChange={handleInputChange}
                error={!!errors.address}
                helperText={getError("address")}
                fullWidth
                required
              />
              <FormControl fullWidth error={!!errors.type} required>
                <InputLabel>Type</InputLabel>
                <Select
                  name="type"
                  value={newProperty.type}
                  onChange={handleInputChange}
                  label="Type"
                >
                  <MenuItem value="Villa">Villa</MenuItem>
                  <MenuItem value="Apartment">Apartment</MenuItem>
                  <MenuItem value="House">House</MenuItem>
                  <MenuItem value="Office">Office</MenuItem>
                </Select>
                {errors.type && <FormHelperText>{errors.type}</FormHelperText>}
              </FormControl>
              <FormControl fullWidth error={!!errors.status} required>
                <InputLabel>Status</InputLabel>
                <Select
                  name="status"
                  value={newProperty.status}
                  onChange={handleInputChange}
                  label="Status"
              >
                <MenuItem value="For Sale">For Sale</MenuItem>
                <MenuItem value="For Rent">For Rent</MenuItem>
                </Select>
                {errors.status && (
                  <FormHelperText>{errors.status}</FormHelperText>
                )}
              </FormControl>
              <TextField
                label="Year Built"
                name="yearBuilt"
                type="number"
                value={newProperty.yearBuilt}
                onChange={handleInputChange}
                error={!!errors.yearBuilt}
                helperText={getError("yearBuilt")}
                fullWidth
                required
              />

              <Typography variant="h6" sx={{ mt: 2 }}>
                Overview
              </Typography>
              <Grid container spacing={2}>
                <Grid item xs={6}>
                  <TextField
                    label="Bedrooms"
                    name="overview.bedrooms"
                    type="number"
                    value={newProperty.overview.bedrooms}
                    onChange={handleInputChange}
                    error={!!errors["overview.bedrooms"]}
                    helperText={getError("overview.bedrooms")}
                    fullWidth
                    required
                  />
                </Grid>
                <Grid item xs={6}>
                  <TextField
                    label="Bathrooms"
                    name="overview.bathrooms"
                    type="number"
                    value={newProperty.overview.bathrooms}
                    onChange={handleInputChange}
                    error={!!errors["overview.bathrooms"]}
                    helperText={getError("overview.bathrooms")}
                    fullWidth
                    required
                  />
                </Grid>
                <Grid item xs={6}>
                  <TextField
                    label="Garage"
                    name="overview.garage"
                    type="number"
                    value={newProperty.overview.garage}
                    onChange={handleInputChange}
                    fullWidth
                  />
                </Grid>
                <Grid item xs={6}>
                  <TextField
                    label="Area (sqft)"
                    name="overview.area"
                    type="number"
                    value={newProperty.overview.area}
                    onChange={handleInputChange}
                    error={!!errors["overview.area"]}
                    helperText={getError("overview.area")}
                    fullWidth
                    required
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    label="Lot Size"
                    name="overview.lotSize"
                    type="number"
                    value={newProperty.overview.lotSize}
                    onChange={handleInputChange}
                    fullWidth
                  />
                </Grid>
              </Grid>

              <Typography variant="h6" sx={{ mt: 2 }}>
                Description
              </Typography>
              <TextField
                label="Description"
                name="description"
                value={newProperty.description}
                onChange={handleInputChange}
                multiline
                rows={4}
                fullWidth
              />

              <Typography variant="h6" sx={{ mt: 2 }}>
                Features
              </Typography>
              <FormGroup>
                <FormControlLabel
                  control={
                    <Checkbox
                      name="features.HomeTheater"
                      checked={newProperty.features.HomeTheater}
                      onChange={handleInputChange}
                    />
                  }
                  label="Home Theater"
                />
                <FormControlLabel
                  control={
                    <Checkbox
                      name="features.Lawn"
                      checked={newProperty.features.Lawn}
                      onChange={handleInputChange}
                    />
                  }
                  label="Lawn"
                />
                <FormControlLabel
                  control={
                    <Checkbox
                      name="features.marbleFloors"
                      checked={newProperty.features.marbleFloors}
                      onChange={handleInputChange}
                    />
                  }
                  label="Marble Floors"
                />
              </FormGroup>
              <TextField
                label="Stories"
                name="features.stories"
                type="number"
                value={newProperty.features.stories}
                onChange={handleInputChange}
                fullWidth
              />

              <Typography variant="h6" sx={{ mt: 2 }}>
                Common Notes
              </Typography>
              <TextField
                label="Common Notes"
                name="propertiesCommonNotes"
                value={newProperty.propertiesCommonNotes}
                onChange={handleInputChange}
                multiline
                rows={2}
                fullWidth
              />
            </Box>
          </DialogContent>
          <DialogActions>
            <Button onClick={() => setOpenModal(false)}>Cancel</Button>
            <Button 
              onClick={handleAddProperty}
              variant="contained"
              color="primary"
            >
              Add Property
            </Button>
          </DialogActions>
        </Dialog>
      </Container>
    </Box>
  );
}
