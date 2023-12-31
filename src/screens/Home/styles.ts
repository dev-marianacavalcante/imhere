import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: "#131016",
  },

  eventName: {
    color: "#FDFCFE",
    fontSize: 24,
    fontWeight: "bold",
    marginTop: 48,
  },

  eventDate: {
    color: "#6B6B6B",
    fontSize: 16,
  },

  input: {
    flex: 1,
    height: 56,
    marginRight: 12,
    backgroundColor: "#1F1E25",
    borderRadius: 5,
    color: "#FFFFFF",
    padding: 16,
    fontSize: 16,
  },

  buttonText: {
    color: "#FFFFFF",
    fontSize: 24,
  },

  button: {
    width: 56,
    height: 56,
    borderRadius: 5,
    backgroundColor: "#31CF67",

    alignItems: "center",
    justifyContent: "center",
  },

  form: {
    width: "100%",
    flexDirection: "row",
    marginTop: 36,
    marginBottom: 42,
  },

  listEmptyText: {
    color: "#FFFFFF",
    fontSize: 14,
    textAlign: "center",
  },
});
