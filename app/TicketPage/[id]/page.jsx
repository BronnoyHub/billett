import EditTicketForm from "@/app/(components)/EditTicketForm";

const getTicketById = async (id) => {
  try {
    const res = await fetch(`http://localhost:3000/api/Tickets/${id}`, {
      cache: "no-store",
    });

    if (!res.ok) {
      throw new Error("Kunne ikke hente sak");
    }

    return res.json();
  } catch (error) {
    console.log(error);
  }
};

let updateTicketData = {};
const TicketPage = async ({ params }) => {
  const EDITMODE = params.id === "ny" ? false : true;

  if (EDITMODE) {
    updateTicketData = await getTicketById(params.id);
    updateTicketData = updateTicketData.foundTicket;
  } else {
    updateTicketData = {
      _id: "ny",
    };
  }

  return <EditTicketForm ticket={updateTicketData} />;
};

export default TicketPage;
