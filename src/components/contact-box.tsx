import Mail from "../icons/mail.tsx";
import Phone from "../icons/phone.tsx";
import Web from "../icons/web.tsx";

const ContactInfo = () => {
  return (
    <div className="col-span-1 bg-primary-300 rounded-[30px] px-8 py-[76px] flex flex-col gap-[30px] w-full">
      <a href="mailto:sppeinture@yahoo.fr"className="underline flex flex-col xl:flex-row gap-4 items-center text-xl font-jost tracking-tight">
        {" "}
        <Mail /> sppeinture@yahoo.fr
      </a>
      <a href="tel:+33684064069" className=" underline flex flex-col xl:flex-row gap-4 items-center text-xl font-jost tracking-tight">
        {" "}
        <Phone /> 06.84.06.40.69
      </a>
      <h5 className="flex flex-col xl:flex-row gap-4 items-center text-xl font-jost tracking-tight">
        {" "}
        <Web /> www.sp-peinture-ile-de-france.fr
      </h5>
    </div>
  );
};

export default ContactInfo;
