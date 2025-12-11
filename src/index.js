import "./styles.css";
import { format } from "date-fns";
import { menuDisplay } from "./app/menu.js"
if (process.env.NODE_ENV !== 'production') { console.log('Looks like we are in development mode!') }

const clog = console.log
clog("Welcome!")

/// Code

menuDisplay(".menu1", ".menu-title-btn", "ul")
menuDisplay(".menu2", ".menu-title-btn", ".menu-list")