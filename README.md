# Network Device Backup Manager

The Network Device Backup Manager is a web application built with TypeScript, React, Java, Spring Boot, and MySQL. It allows users to manage backups of network devices, such as Cisco devices.

## Features

- View a list of network devices
- Add new devices to the list
- Display device details including device name, IP address, vendor, connection status, and last backup time
- Edit device information
- Delete devices from the list

## Technologies Used

- **Frontend**: React, TypeScript, Redux (soon to be added), React Bootstrap, Styled Components
- **Backend**: Java, Spring Boot, MySQL (database server)
- **API**: Fetch API (for making HTTP requests)

## Getting Started

To get started with the Network Device Backup Manager, follow these steps:

### Frontend

front end repo: https://github.com/A-T-Team/backup_tool_tma_frontend

1. Clone the repository:
   ```
   git clone https://github.com/A-T-Team/backup_tool_tma_frontend.git
   ```

2. Install the frontend dependencies:
   ```
   npm install
   ```

3. Start the frontend development server:
   ```
   npm start
   ```

4. Open the application in your web browser:
   ```
   http://localhost:3000
   ```

### Backend

backend repo: https://github.com/A-T-Team/IOS_BACKUP

1. Clone the repository (if you haven't done so already):
   ```
   git clone https://github.com/A-T-Team/IOS_BACKUP.git
   ```

2. Open the `backend` directory:
   ```
   cd backend
   ```

3. Install the backend dependencies and build the project:
   ```
   mvn clean install
   ```

4. Start the backend server:
   ```
   mvn spring-boot:run
   ```

By default, the backend server will run on `http://localhost:8080`.

## Contribution

Contributions to the Network Device Backup Manager are welcome! If you find any bugs or have suggestions for new features, please open an issue or submit a pull request.

## License

This project is licensed under the [MIT License](LICENSE).

---

Feel free to customize the sections and provide more detailed information about your project as needed. Add any additional setup instructions or information specific to your backend implementation using Java and Spring Boot.

Remember to replace `your-username` and `your-repo` with your GitHub username and repository name.

I hope this updated README helps you provide a comprehensive overview of your project!
