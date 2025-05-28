import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/globals.css';
import 'react-date-picker/dist/DatePicker.css';
import 'react-calendar/dist/Calendar.css';
import BootstrapClients from '@/components/BootstrapClients';

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
        <BootstrapClients />
      </body>
    </html>
  );
}