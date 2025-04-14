import React from "react";
import {
  Button,
  Card,
  CardContent,
  Avatar,
  CircularProgress,
} from "@mui/material";
import { Icon } from "@iconify/react";

export default function Testimonials() {
  const [testimonials, setTestimonials] = React.useState([]);
  const [currentIndex, setCurrentIndex] = React.useState(0);
  const [isLoading, setIsLoading] = React.useState(true);
  const [error, setError] = React.useState(null);

  React.useEffect(() => {
    const fetchTestimonials = async () => {
      try {
        // Fetch testimonials from JSON file
        const response = await fetch("/public/data/testimonials.json");
        if (!response.ok) {
          throw new Error("Failed to fetch testimonials");
        }
        const data = await response.json();
        
        // Get client messages from localStorage
        const clientMessages = JSON.parse(localStorage.getItem('clientMessages')) || [];
        
        // Transform client messages into testimonial format
        const transformedMessages = clientMessages.map((message, index) => ({
          id: `client-${index}`,
          name: message.name,
          role: "Client",
          quote: message.message,
          description: `Contact: ${message.email} | Phone: ${message.phone}`,
          avatar: "https://mui.com/static/images/avatar/1.jpg" // Default avatar for clients
        }));

        // Combine JSON testimonials with client messages
        const combinedTestimonials = [...data.testimonials, ...transformedMessages];
        
        setTestimonials(combinedTestimonials);
        setIsLoading(false);
      } catch (err) {
        setError(err.message);
        setIsLoading(false);
      }
    };

    fetchTestimonials();
  }, []);

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const handlePrev = () => {
    setCurrentIndex(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    );
  };

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <CircularProgress color="primary" size={60} />
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-danger text-lg">Error: {error}</p>
      </div>
    );
  }

  if (!testimonials.length) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-lg">No testimonials found.</p>
      </div>
    );
  }

  const currentTestimonial = testimonials[currentIndex];

  return (
    <div className="min-h-screen bg-gradient-to-br from-background to-default-50 flex items-center justify-center p-4">
      <div className="max-w-6xl w-full">
        <h2 className="text-4xl font-bold text-center mb-12">
          Customers Loves Us
        </h2>

        <Card
          className="relative overflow-hidden"
          style={{ boxShadow: "none" }}
        >
          <CardContent className="p-8">
            <div
              className="flex flex-col md:flex-row gap-9 items-center"
              style={{
                backgroundImage:
                  "radial-gradient(var(--rh-global-color-primary-light) 20%, transparent 20%)",
                backgroundPosition: " 0 0, 50px 50px",
                backgroundSize: "25px 25px",
              }}
            >
              <div className="w-52 h-52 flex-shrink-0">
                <Avatar
                  src={currentTestimonial.avatar}
                  className="w-full h-full"
                  sx={{
                    border: "3px solid",
                    borderColor: "primary.main",
                    width: "100%",
                    height: "100%",
                  }}
                />
              </div>

              <div className="flex-1 text-center md:text-left">
                <blockquote className="text-xl md:text-2xl font-medium text-primary mb-4">
                  {currentTestimonial.quote}
                </blockquote>
                <p className="text-default-600 mb-6">
                  {currentTestimonial.description}
                </p>
                <div className="space-y-1">
                  <h3 className="font-semibold text-lg">
                    {currentTestimonial.name}
                  </h3>
                  <p className="text-default-500">{currentTestimonial.role}</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <div className="flex justify-center gap-2 mt-8">
          <Button
            variant="contained"
            onClick={handlePrev}
            aria-label="Previous testimonial"
            sx={{
              minWidth: "40px",
              width: "40px",
              height: "40px",
              borderRadius: "50%",
            }}
          >
            <Icon icon="lucide:chevron-left" className="w-5 h-5" />
          </Button>

          {testimonials.map((_, index) => (
            <Button
              key={index}
              size="small"
              variant={index === currentIndex ? "contained" : "outlined"}
              color={index === currentIndex ? "primary" : "default"}
              sx={{ minWidth: "32px" }}
              onClick={() => setCurrentIndex(index)}
            >
              {index + 1}
            </Button>
          ))}

          <Button
            variant="contained"
            onClick={handleNext}
            aria-label="Next testimonial"
            sx={{
              minWidth: "40px",
              width: "40px",
              height: "40px",
              borderRadius: "50%",
            }}
          >
            <Icon icon="lucide:chevron-right" className="w-5 h-5" />
          </Button>
        </div>
      </div>
    </div>
  );
}
