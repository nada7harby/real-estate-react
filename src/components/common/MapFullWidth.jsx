const MapFullWidth = () => {
  return (
    <div className="w-full h-[400px] rounded-2xl overflow-hidden shadow-md mb-8">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m10!1m8!1m3!1d1980637.0612116265!2d-80.10099541264498!3d26.653053636207837!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sus!4v1744036768678!5m2!1sen!2sus"
        width="100%"
        height="100%"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  );
};

export default MapFullWidth;
