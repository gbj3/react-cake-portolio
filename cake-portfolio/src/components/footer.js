import React from "react";
import { Image, Stack, Nav } from 'react-bootstrap';

import Logo from './images/logo-cropped.jpg';

function Footer() {
    return (
        <Stack direction="horizontal" gap={3} >
            <div className="p-2"><Image src={Logo} alt='logo' width='64' fluid /></div>
            <div className="p-2 ms-auto"><Nav.Link href={"/"} style={{color:'black'}}>Home</Nav.Link></div>
            <div className="p-2"><Nav.Link href="/portfolio" style={{color:'black'}}>Previous Work</Nav.Link></div>
            <div className="p-2"><Nav.Link href="/contact" style={{color:'black'}}>Contact Me</Nav.Link></div>
        </Stack>
    );
}

export default Footer;