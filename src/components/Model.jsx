

const Modal = ({ isVisible, onClose, videoUrl }) => {
 
  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 top-10 z-50">
      <div className="fixed inset-0 bg-black opacity-50" onClick={onClose}></div>
      <div className="bg-white rounded-lg shadow-lg z-10 p-8 max-w-3xl mx-auto relative">
        <button className="absolute top-0 right-0 m-4 text-black" onClick={onClose}>
          &times;
        </button>
        <div className="relative w-full h-full" style={{ paddingBottom: '56.25%', height: "100%" }}>
          <iframe 
            className="absolute top-0 left-0 w-full h-full" 
            src={videoUrl} 
            frameBorder="0" 
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" 
            allowFullScreen 
            title="Embedded Video"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default Modal;
