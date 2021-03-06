import React, {Fragment} from "react";

import Header from "../components/Header.jsx";
import Card from "../components/Card.jsx";
import Cards from "../components/Cards.jsx";
import Hero from "../components/Hero.jsx";
import Button from "../components/Button.jsx";
import Footer from "../components/Footer.jsx";

import Picasso from "../assets/Merchandising@2x.png";

import SiliconPublishingLogo from "../assets/logos/SPI2.png";
import UIFacesLogo from "../assets/logos/logo-web.svg";
import IconScoutLogo from "../assets/logos/Icon_Black.png";
import AirTableLogo from "../assets/logos/mark.png";
import ImpekableLogo from "../assets/logos/impekable_logo.svg";
import StarkLogo from "../assets/logos/Stark Logo Avatar (1).png";
import DribbbleLogo from "../assets/logos/dribbble.png";
import BehanceLogo from "../assets/logos/behance.png";
import UserTestingLogo from "../assets/logos/UT_Logo.png";
import TrelloLogo from "../assets/logos/mark-trello-blue-Blue.png";
import SlopeLogo from "../assets/logos/slope-logo_full-color_dark.png";
import InMotionNowLogo from "../assets/logos/F.inmotionnowlogo.png";

export default function Home() {
    return (
      <Fragment>
        <Header items={[]} />
        <Hero heading={"The world of XD plugin creation...coming soon!"}
        footing={
                    <Button target="_blank" href="https://adobe.allegiancetech.com/cgi-bin/qwebcorporate.dll?idx=BPQ22V">
                        Get Launch Notification
                    </Button>
                }>
          <img alt="" src={Picasso}/>
        </Hero>
        <Cards
          heading={
            "Automate complex workflows, and integrate with other apps and services"
          }
          level="h2"
          backgroundColor="white"
        >
          <Card level="h4" title="Asset Management &amp; Import">
            <p>
              Provide designers with access to stock photography and assets, and
              integrate with your DAM or brand management system.
            </p>
            <p className="logos">
              <img src={SiliconPublishingLogo} alt="Silicon Publishing logo" title="Silicon Publishing" />
              <img src={UIFacesLogo} alt="UI Faces logo" title="UI Faces" />
              <img src={IconScoutLogo} alt="Icon Scout logo" title="Icon Scout" />
            </p>
          </Card>
          <Card level="h4" title="Automation &amp; Utility">
            <p>
              Help designers automate repetitive or tedious tasks. Unleash their
              creativity by enabling generative and data-driven designs.
            </p>
            <p className="logos">
              <img src={AirTableLogo} title="Airtable" alt="Airtable logo"/>
              <img style={{height: 96, margin: "-32px 0"}} src={ImpekableLogo} alt="Impekable Logo" title="Impekable" />
              <img src={StarkLogo} title="Stark" alt="Stark logo"/>
            </p>
          </Card>
        </Cards>
        <Cards
          backgroundColor="white"
        >
          <Card level="h4" title="Publish &amp; Handoff">
            <p>
              Make publishing and handoff a breeze by integrating with online
              services and content management systems.
            </p>
            <p className="logos">
              <img src={DribbbleLogo} title="Dribbble" alt="Dribbble logo" />
              <img src={BehanceLogo} title="Behance" alt="Behance logo" />
              <img src={UserTestingLogo} title="UserTesting" alt="UserTesting logo"/>
            </p>
          </Card>
          <Card level="h4" title="Designer &amp; Stakeholder Collaboration">
            <p>
              Enhance collaboration between designers and stakeholders by
              integrating with the workflow services your team uses.
            </p>
            <p className="logos">
              <img src={TrelloLogo} title="Trello" alt="Trello logo" />
              <img src={SlopeLogo} title="Slope" alt="Slope logo" />
              <img src={InMotionNowLogo} title="InMotionNow" alt="InMotionNow logo" />
            </p>
          </Card>
        </Cards>
        <Cards heading={"Community Resources"} level={"h2"}>
          <Card level="h4" title="Adobe Tech Blog">
            <p>
              Follow the Adobe Tech Blog for early news and articles about XD Plugins.
            </p>
            <a href="https://medium.com/adobetech">Read the blog</a>
          </Card>
          <Card level="h4" title="User Community">
            <p>
              See what users want from Adobe XD plugins and get inspiration for your first plugin idea.
            </p>
            <a href="https://adobexd.uservoice.com/forums/353007-adobe-xd-feature-requests?category_id=159993">Learn more about users</a>
          </Card>
        </Cards>
        <Footer />
      </Fragment>
    );
  }