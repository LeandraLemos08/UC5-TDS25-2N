# SyncHealth

SyncHealth is a mobile health application designed to reduce patient waiting times and improve access to public healthcare units.
Real-time queue data is collected from users and displayed on an interactive map. Appointment scheduling is supported remotely, so patients are notified when it is time to travel to the unit.

---

## Team

- Leandra Lemos

---

## Technologies Used

- **JavaScript** — Main programming language used across the application (frontend and backend logic)
- **MySQL** — Used to store and manage all application data (users, appointments, medical conditions, history)
- **Figma / Canva** — Used to design the application screens and presentation materials
- **GitHub / VSCode** — Used for version control, team collaboration, and code editing

---

## Features

- Health units near the user are displayed in real time on an interactive map, with color-coded wait times (fast, medium, slow).
- Appointments are scheduled remotely so that patients are only required to travel when their turn is approaching.
- A chatbot is equipped with triage protocols (such as the Manchester Protocol) so that patients are guided and monitored before arrival.
- Family health profiles are supported, so that dependents are managed under a single account.
- Individual information about each unit (type, address, status) is made accessible to patients directly in the app.
- An SOS feature is included so that emergency situations are flagged immediately.

---

## Installation

Clone the repository to your local machine:

```bash
git clone <repo-url>
```

Navigate into the project folder and install all dependencies:

```bash
cd synchealth
npm install
```

Set up the MySQL database by importing the provided schema file:

```bash
mysql -u root -p synchealth < database/schema.sql
```

Copy the environment variables file and fill in your database credentials:

```bash
cp .env.example .env
```

---

## How to Run

Start the development server:

```bash
npm run dev
```

The application will be available at `http://localhost:3000`.

---

## Changelog

### v1.0.0
- The base database schema (ER diagram) was designed and modeled with all core entities: `usuario`, `atendimento`, `unidade_de_saude`, `familia`, `condicao_medica`, `medicacao`, and `historico`.
- The initial wireframes for the home screen, side menu, and login screen were created in Figma.
- The relational (logical) model was mapped from the ER diagram, and all foreign keys were defined.

---

## Known Issues

- Wait time estimates can be inaccurate when very few users are active in a given health unit area.
- The chatbot responses should be reviewed by a medical professional before the system is released to the public.
- Family profile access must be restricted by permission rules, which have not been fully implemented yet.

---

## Roadmap

- Push notifications will be added so that patients are alerted automatically when their queue position changes.
- The Manchester Protocol chatbot will be fully integrated so that triage recommendations are generated automatically for each patient session.
- A feedback system will be implemented so that unit ratings and comments are collected from patients after each visit.
- Dark mode will be added in a future release to improve accessibility.

---

## Rules & Requirements

- User passwords must be encrypted before they are stored in the database.
- Invalid or incomplete form data must be rejected by the system before any record is saved.
- Queue position and wait time must be recalculated automatically whenever a new check-in is registered.
- Family profile access must be authorized by the account owner before any dependent's data is viewed or edited.
- Emergency (SOS) requests must be prioritized and must not be blocked by any queue or scheduling restriction.
- Patient medical history must be protected and must only be accessed by the authenticated account holder.

