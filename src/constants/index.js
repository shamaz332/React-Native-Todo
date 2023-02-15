const COLORS = {
  primary: "#003131",
  secondary: "#E9E9E9",
  accent: "#1F936D",
};

const SIZES = {
  padding: 19,
  margin: 20,
  borderRadius: 15,
  textBoxRadius: 25,
  h1: 24,
  h2: 20,
};

const FONTS = {
  h1_semiBold: {
    fontSize: SIZES.h1,
    fontFamily: "Montserrat-SemiBold",
  },
  h2_semiBold: {
    fontSize: SIZES.h2,
    fontFamily: "Montserrat-SemiBold",
  },
};

const SHADOW = {
  elevation: 5,
  shadowColor: COLORS.secondary,
  shadowOffset: {
    width: 2,
    height: 12,
  },
  shadowRadius: 12,
};

export { COLORS, SIZES, FONTS, SHADOW };
