"use client";
import React from "react";
import styles from "./ContactForm.module.scss";
import { TextField } from "@mui/material";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/shadcn-ui/ui/alert-dialog";
import { Button } from "@/components/shadcn-ui/ui/button";

const ContactForm: React.FC = () => {
  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    // Lógica de envío de formulario aquí
  };

  return (
    <div className={styles.ContactForm}>
      <form onSubmit={handleSubmit} className={styles.form}>
        <TextField
          focused
          label="Nombre"
          type="text"
          InputProps={{ className: styles.input }}
        />
        <TextField
          focused
          label="Correo electrónico"
          type="email"
          InputProps={{ className: styles.input }}
        />
        <TextField
          focused
          label="Mensaje"
          multiline
          rows={3}
          InputProps={{ className: styles.input }}
        />
        <AlertDialog>
          <AlertDialogTrigger asChild>
            <Button variant="outline">Show Dialog</Button>
          </AlertDialogTrigger>
          <AlertDialogContent>
            <AlertDialogHeader>
              <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
              <AlertDialogDescription>
                This action cannot be undone. This will permanently delete your
                account and remove your data from our servers.
              </AlertDialogDescription>
            </AlertDialogHeader>
            <AlertDialogFooter>
              <AlertDialogCancel>Cancel</AlertDialogCancel>
              <AlertDialogAction>Continue</AlertDialogAction>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialog>
      </form>
    </div>
  );
};

export default ContactForm;
