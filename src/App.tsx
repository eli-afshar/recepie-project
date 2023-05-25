import NavBar from "./components/NavBar";
import { Grid, GridItem } from "@chakra-ui/react";
import RecipeCategories from "./components/RecipeCategories";

function App() {
  return (
    <Grid
      templateAreas={`"header header"
                  "side main"
                  "side footer"`}
      gridTemplateRows={"80px 1fr 30px"}
      gridTemplateColumns={"150px 1fr"}
      h="900px"
      gap="1"
      color="blackAlpha.700"
      fontWeight="bold"
    >
      <GridItem area={"header"}>
        <NavBar />
      </GridItem>
      <GridItem bg="lightgray" area={"side"}>
        <RecipeCategories />
      </GridItem>
      <GridItem bg="lightgray" area={"main"}>
        Main
      </GridItem>
      <GridItem bg="lightgray" area={"footer"}>
        Footer
      </GridItem>
    </Grid>
  );
}

export default App;
