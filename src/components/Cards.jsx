import React from "react";

export default function Cards({
  heading,
  footing,
  level = "h1",
  children,
  backgroundColor = "#323232",
  backgroundImage,
  justifyContent = "center",
  height,
  paddingLeft = "10%",
  paddingRight = "10%",
  marginLeft,
  marginRight,
  wrapperMarginBottom,
  wrapperPaddingBottom = 35,
  width,
  flexDirection = "row",
  textAlign = "center",
  paddingTop,
  minWidth = 300,
  buffer,
  twoApis = false
} = {}) {
  const styles = {
    wrapper: {
      backgroundImage: backgroundImage ? `url(${backgroundImage})` : undefined,
      backgroundSize: "cover",
      backgroundColor,
      paddingBottom: wrapperPaddingBottom,
      paddingLeft,
      paddingRight,
      marginBottom: wrapperMarginBottom,
      height,
      paddingTop: buffer,
      border: 0
    },
    h1: {
      fontWeight: 200,
      textAlign,
      padding: 0,
      paddingTop: 48,
      margin: 0,
      marginBottom: 24,
      fontSize: 32
    },
    h2: {

      fontWeight: 700,
      textAlign,
      padding: 0,
      paddingTop: 48,
      margin: 0,
      marginBottom: 24,
      fontSize: 20
    },
    cards: {
      display: "flex",
      flexDirection,
      justifyContent,
      alignItems: "center",
      textAlign,
      minWidth,
      maxWidth: width,
      marginLeft,
      marginRight,
      padding: "12 24",
      paddingTop,
      height: "100%"
    }
  };

  return (
    <div style={styles.wrapper} class="smallerPadding">
      {heading && <div style={styles[level]}>{heading}</div>}
      <div style={styles.cards}>{children}</div>
      {/* {footing} */}
    </div>
  )

}
