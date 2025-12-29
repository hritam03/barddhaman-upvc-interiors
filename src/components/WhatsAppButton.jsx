import whatsappIcon from "../assets/WhatsAppLogo.jpg";

function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/919932449360"
      className="whatsapp-float"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
    >
      <img src={whatsappIcon} alt="WhatsApp" />
    </a>
  );
}

export default WhatsAppButton;

