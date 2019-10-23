import React, { Fragment } from "react";

import Header from "../components/Header.jsx";
import Card from "../components/Card.jsx";
import FeatureCard from "../components/FeatureCard.jsx";
import FeatureBoard from "../components/FeatureBoard.jsx";
import Cards from "../components/Cards.jsx";
import Description from "../components/Description.jsx";
import Button from "../components/Button.jsx";
import Footer from "../components/Footer.jsx";

import createPNG from "../assets/xd_web_create.png";
import collaborationPNG from "../assets/collaboration.png";
import designSVG from "../assets/design.svg";
import toolsPNG from "../assets/tools.png";
import usabilityPNG from "../assets/usability.png";
import publishSVG from "../assets/publish.svg";
import chevronSVG from "../assets/chevron.svg";
import forumSVG from "../assets/forum.svg";
import newsletterSVG from "../assets/newsletter.svg";
import githubSVG from "../assets/github.svg";
import jiraSVG from "../assets/jira.svg";
import mainPNG from "../assets/main@2x.png";
import rightPNG from "../assets/right.png";
import updatePluginPNG from "../assets/update-your-plugin@2x.png";
import logoPNG from "../assets/logo.png";
import featureLogoPNG from "../assets/feature-plugin@2x.png";
import marketplacePNG from "../assets/Marketplace@3x.png";
import pluginPNG from "../assets/Essential-Plugins@2x.png";
import cloudPNG from "../assets/Connect-Your-Tools@2x.png";
import buildPNG from "../assets/xd_web_build.png";
import sharePNG from "../assets/xd_web_share.png";
import devCommunitySVG from "../assets/S_Illu_DeveloperCommunity_180x120.svg";
import userCommunitySVG from "../assets/S_Illu_UserCommunity_180x120.svg";
import arrowSVG from "../assets/S_Illu_ArrowRight_180x30.svg";

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

const cloudLink = "http://localhost:8080/";
const pluginLink = "http://localhost:8081/";
const communityLink = "http://localhost:8082/";
const homeLink = "http://localhost:3000/";
const consoleLink = "https://console.adobe.io";
const cloudConsoleLink = "https://adobe.allegiancetech.com/cgi-bin/qwebcorporate.dll?JDQ78F";
const forumLink = "https://forums.adobexdplatform.com";
const newsletterLink = "https://www.adobe.com/subscription/ccdevnewsletter.html"
const githubLink = "https://github.com/AdobeXD";
const blogUrl = "https://theblog.adobe.com/adobe-xd-for-jira-cloud-streamline-design-to-development-workflows/";

export default function Home() {
  const items = [
    { label: "Plugin APIs", href: pluginLink },
    { label: "Cloud Content APIs", href: cloudLink },
    { label: "Community & Support", href: communityLink }
  ];
  const styles = {
    row: {
      display: "flex",
      flexDirection: "row",
      marginBottom: 10,
      paddingLeft: 20,
      width: "100%"
    }
  }
  return (
    <Fragment>
      <Header items={items} home={homeLink} />
      <Cards marginLeft={20} justifyContent="flex-start" height={440} wrapperPaddingBottom={0} buffer={96} backgroundColor="#71005C">
        <Description padding={0} width="50%" textFontSize={24} tagFontSize={45} title="Adobe XD Platform" text="Push the boundaries of design work even further">
        </Description>
        <Card level="h4" space={0} img={mainPNG} imgAlt="placeholder" marginLeft="15%" width="30%" imgWidth={463} imgHeight={310}>
        </Card>
      </Cards>
      <Cards backgroundColor="white" height="auto" justifyContent="center" wrapperPaddingBottom={5}>
        <Description marginTop={20} width={1000} color="black" align="center" tagFontSize={35} textFontSize={24} title="Documentation and resources" text="Everything you need to extend the Adobe XD experience">
        </Description>
      </Cards>
      <Cards wrapperPaddingBottom={20} marginLeft={"20%"} marginRight={"20%"} minWidth={300} paddingTop={0} backgroundColor="white" height="auto" justifyContent="center">
        <Card level="h4" marginRight="5%" bodyWidth={300} space={20} img={pluginPNG} imgAlt="placeholder" imgWidth={243} imgHeight={162} width="40%" title="Plugin APIs" href={pluginLink} children="Bring new capabilities to XD" link="Create a plugin">
        </Card>
        <Card level="h4" bodyWidth={300} space={20} img={cloudPNG} imgAlt="placeholder" imgWidth={243} imgHeight={162} width="40%" marginLeft={0} title="Cloud Content APIs" href={cloudLink} children="Connect XD designs to your product" link="Start integrating">
        </Card>
      </Cards>
      <Cards height="auto" justifyContent="flex-start" wrapperPaddingBottom={10}>
        <Description marginTop={30} tagFontSize={27} color="white" title="See what developers are building" >
        </Description>
      </Cards>
      <Cards height={100} justifyContent="flex-start" wrapperPaddingBottom={15}>
        <Description arrowSVG={chevronSVG} imgAlt="placeholder" width="100%" tagFontSize={24} color="white" rightTag="Create your own plugin" href={consoleLink} title="XD Plugins" text="Developers extend XD's core functionality with these types of plugins and more, all powered by the XD Plugin APIs." >
        </Description>
      </Cards>
      <Cards height="auto" marginLeft={32} wrapperPaddingBottom={10}>
        <FeatureCard body="Connect designers with their teams and stakeholders" img={collaborationPNG} imgAlt="placeholder" width="20%" height={247} backgroundColor="#505050" title="Collaboration" imgHeight={41} imgWidth={41}>

        </FeatureCard>
        <FeatureCard body="Accelerate design work with new and unique features" img={toolsPNG} imgAlt="placeholder" width="20%" height={247} backgroundColor="#505050" title="Tools & Automation" imgHeight={41} imgWidth={41} marginLeft={20}>

        </FeatureCard>
        <FeatureCard body="Enable designers to share their work anywhere" img={publishSVG} imgAlt="placeholder" width="20%" height={247} backgroundColor="#505050" title="Publish & Handoff" imgHeight={41} imgWidth={41} marginLeft={20}>

        </FeatureCard>
        <FeatureCard body="Help designers ensure their work connects with users" img={usabilityPNG} imgAlt="placeholder" width="20%" height={247} backgroundColor="#505050" title="Usability & Testing" imgHeight={41} imgWidth={41} marginLeft={20}>

        </FeatureCard>
        <FeatureCard body="Provide direct access to icons, images, data, and more" img={designSVG} imgAlt="placeholder" width="20%" height={247} backgroundColor="#505050" title="Design Assets" imgHeight={41} imgWidth={41} marginLeft={20}>

        </FeatureCard>
      </Cards>
      <Cards height={100} justifyContent="flex-start" wrapperPaddingBottom={10}>
        <Description arrowSVG={chevronSVG} imgAlt="placeholder" width="100%" tagFontSize={24} color="white" rightTag="Start integrating today" href={cloudConsoleLink} title="XD Cloud Content Integrations" text="With the XD Cloud Content APIs, you can bring design work created in XD directly to your product or service.">
        </Description>
      </Cards>
      <Cards height="auto" marginLeft={32} textAlign="left">
        <FeatureBoard link="Learn more" linkUrl={blogUrl} text="The Adobe XD and Jira Software Cloud integration uses the XD Cloud Content APIs to let designers associate XD prototypes and design specs with Jira issues. This keeps projects organized while providing developers with everything they need to know in the environment they know." title="Bringing designers and developers together" color="white" img={jiraSVG} imgAlt="placeholder" img2={featureLogoPNG} imgAlt2="placeholder" tagFontSize={14} height="100%" backgroundColor="#505050" imgHeight={60} imgWidth={300}>
        </FeatureBoard>
      </Cards>
      <Cards paddingTop={30} marginLeft={20} wrapperPaddingBottom={20} height="auto" backgroundColor="#F4F4F4" justifyContent="flex-start">
        <Description center={true} marginTop={50} width="100%" textFontSize={24} tagFontSize={30} color="black" title="Showcase it in XD" text="The XD Plugin Manager lets designers discover plugins and integrations right where they spend their time: in Adobe XD.">
        </Description>
      </Cards>
      <Cards paddingTop={10} marginLeft={40} wrapperPaddingBottom={40} height="auto" backgroundColor="#F4F4F4" justifyContent="flex-start">
        <div class="left">
          <img src={marketplacePNG} alt="placeholder" class="market"></img>
        </div>
        <div class="right">
          <div class="topText">
            <p>The XD Plugin Manager brings plugin and integration discovery right to where designers spend their time in Adobe XD.</p>
            <a style={styles.a}>View</a>
          </div>
          <div class="rightBottom">
            <Description padding={0} marginTop={30} tagFontSize={15} width="100%" textFontSize={15} color="black" title="List your product" text="You can list your plugins and integrations with a description, screenshots, icons, help URL, localization, and more.">
            </Description>
            <Description padding={0} marginTop={36} tagFontSize={15} width="100%" textFontSize={15} color="black" title="Link to your listing" text="The XD Plugin Manager supports deep links, meaning you can create a unique URL that opens the XD Plugin Manager right to your listing.">
            </Description>
            <Description padding={0} marginTop={36} tagFontSize={15} width="100%" textFontSize={15} color="black" title="Get discovered" text="Users know that the place to find XD plugins and integrations is the XD Plugin Manager, where they can browse, search, and manage their plugins.">
            </Description>
          </div>
        </div>
      </Cards>
      <Cards height="auto" backgroundColor="white" justifyContent="flex-start" wrapperPaddingBottom={0}>
        <Description marginTop={50} tagFontSize={30} width="100%" color="black" title="Community & Support">
        </Description>
      </Cards>
      <Cards marginLeft={20} height="auto" wrapperPaddingBottom={10} backgroundColor="white" wrapperPaddingBottom={40}>
        <Card level="h4" bodyHeight={30} space={10} href={forumLink} img={forumSVG} imgAlt="placeholder" marginLeft={16} imgWidth={"100%"} imgHeight={"auto"} children="Join the XD Platform forums">
        </Card>
        <Card level="h4" bodyHeight={30} space={10} href={newsletterLink} img={newsletterSVG} imgAlt="placeholder" marginLeft={20} imgWidth={"100%"} imgHeight={"auto"} children="Sign up for the CC Developer Newsletter">
        </Card>
        <Card level="h4" bodyHeight={30} space={10} href={githubLink} img={githubSVG} imgAlt="placeholder" marginLeft={20} imgWidth={"100%"} imgHeight={"auto"} children="Visit Adobe XD on GitHub">
        </Card>
      </Cards>
      <Footer />
    </Fragment >
  );
}