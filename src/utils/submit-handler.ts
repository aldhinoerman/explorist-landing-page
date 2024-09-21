import moment from "moment";
import { capitalizeFirstLetter } from "./wording";

const message = (data: any, isCar?: boolean) => {
  const body =
    `Hi Explorist, I want to ${encodeURIComponent(
      !isCar ? "discover" : "rent"
    )} ${encodeURIComponent(data.package_name)} for ${encodeURIComponent(
      data.adult
    )} adult(s) and ${encodeURIComponent(
      data.child
    )} children(s). Here are the booking details:%0A%0A` +
    `Name: ${encodeURIComponent(data.name)}%0A` +
    `Email: ${encodeURIComponent(data?.email ?? "-")}%0A` +
    `Phone: ${encodeURIComponent(data?.phone ?? "-")}%0A` +
    `Date: ${encodeURIComponent(moment(data.date).format("DD MMM YYYY"))}%0A` +
    `Time: ${encodeURIComponent(data.time)}%0A` +
    `Pick Up At: ${encodeURIComponent(
      data?.pick_up_at ? capitalizeFirstLetter(data.pick_up_at) : "-"
    )}%0A`;

  const locationDetails = data?.hotel_name
    ? `Hotel Name: ${encodeURIComponent(data.hotel_name)}%0A` +
      `Hotel Address: ${encodeURIComponent(data?.hotel_address ?? "-")}%0A`
    : `Station: ${encodeURIComponent(data?.station ?? "-")}%0A` +
      `Flight Number: ${encodeURIComponent(data?.flight_number ?? "-")}%0A`;

  const additionalDetails =
    `Notes: ${encodeURIComponent(data?.notes ?? "-")}%0A%0A` +
    `**${encodeURIComponent(data?.inclusion ? "Inclusion" : "Regular")}**`;

  const finalMessage = body + locationDetails + additionalDetails;

  return finalMessage;
};

const onSubmitWhatsApp = (data: any, isCar?: boolean) => {
  if (!data) return;
  const whatsappUrl = `https://api.whatsapp.com/send?phone=6282145500117&text=${message(
    data,
    isCar
  )}`;

  window.open(whatsappUrl, "_blank");
};

const onSubmitEmail = (data: any, isCar?: boolean) => {
  if (!data) return;
  const subject = encodeURIComponent("Booking Request");

  const mailtoUrl = `mailto:exploristbali@gmail.com?subject=${subject}&body=${message(
    data,
    isCar
  )}`;

  window.open(mailtoUrl, "_blank");
};

export { onSubmitEmail, onSubmitWhatsApp };
