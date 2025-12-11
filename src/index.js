import "./styles.css";
import { format } from "date-fns";

if (process.env.NODE_ENV !== 'production') { console.log('Looks like we are in development mode!') }

const clog = console.log

clog("Welcome!")

