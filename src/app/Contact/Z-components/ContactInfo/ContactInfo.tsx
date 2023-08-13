"use client";
import React from "react";
import { Typography } from "@mui/material";
import styles from "./ContactInfo.module.scss"

const ContactInfo: React.FC = () => {
  return (
    <div className={styles.ContactInfo}>
      <div className={styles.container}>
        <Typography variant="h6">Información de contacto</Typography>
        <Typography>Correo: contacto@example.com</Typography>
        <Typography>Teléfono: +123 456 789</Typography>
        <Typography>Dirección: Calle Principal, Ciudad</Typography>
      </div>
    </div>
  );
};

export default ContactInfo;
