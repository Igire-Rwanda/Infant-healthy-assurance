const BASE_URL = "https://sore-puce-brown-bear-sock.cyclic.app/api/v1"; 

export const createAppointment = async (data) => {
  try {
    const response = await fetch(`${BASE_URL}/appointment/create`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    if (response.ok) {
      window.alert("Appointment was successfully created!");
      const result = await response.json();
      return result;
    } else {
      window.alert("Failed to create the appointment, try again!");
      throw new Error("Failed to create appointment");
    }
  } catch (error) {
    console.log("Error:", error);
    throw error;
  }
};

export const readAppointment = async () => {
  try {
    const response = await fetch(`${BASE_URL}/appointments`);

    if (response.ok) {
      const result = await response.json();
      return result;
    } else {
      throw new Error("Failed to read appointments");
    }
  } catch (error) {
    console.log("Error:", error);
    throw error;
  }
};

export const deleteAppointment = async (appointmentId) => {
  try {
    const response = await fetch(`${BASE_URL}/appointments/${appointmentId}`, {
      method: "DELETE",
    });

    if (response.ok) {
      const result = await response.json();
      return result;
    } else {
      throw new Error("Failed to delete appointment");
    }
  } catch (error) {
    console.log("Error:", error);
    throw error;
  }
  };


export const sendBroadcastMessages = async (data) => {
  try {
    const response = await fetch(`${BASE_URL}/broadcast/send`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    if (response.ok) {
      window.alert("Broadcast queue is well done!");
    }
  } catch (error) {
    console.log("Error:", error);
    throw error;
  }
};
