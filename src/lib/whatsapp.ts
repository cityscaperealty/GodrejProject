const WHATSAPP_NUMBER = "919156421125";

export type MessageType = 'general' | 'price' | 'brochure' | 'visit' | 'tour' | 'layout' | 'lead';

export function getWhatsAppUrl(type: MessageType, projectName?: string, leadData?: { name: string, phone: string, email?: string }) {
  let message = "";

  switch (type) {
    case 'general':
      message = "Hi, I am interested in Godrej properties in Pune. Please share details.";
      break;
    case 'price':
      message = `Hi, I am interested in ${projectName}. Please share complete price breakup, offers & hidden charges.`;
      break;
    case 'brochure':
      message = `Hi, please send brochure, floor plans & latest availability for ${projectName}.`;
      break;
    case 'visit':
      message = `Hi, I want to schedule a site visit for ${projectName}. Please share available time slots.`;
      break;
    case 'tour':
      message = `Hi, I would like to see the virtual tour of ${projectName}.`;
      break;
    case 'layout':
      message = `Hi, please share the layout plan for ${projectName}.`;
      break;
    case 'lead':
      if (leadData) {
        message = `Hi, my name is ${leadData.name}. My phone number is ${leadData.phone}. My email is ${leadData.email}. I am interested in Godrej properties in Pune. Please share best price, current offers, and availability.`;
      }
      break;
  }

  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

export function openWhatsApp(type: MessageType, projectName?: string, leadData?: { name: string, phone: string, email?: string }) {
  window.open(getWhatsAppUrl(type, projectName, leadData), '_blank');
}