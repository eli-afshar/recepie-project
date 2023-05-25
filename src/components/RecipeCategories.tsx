import { Heading, ListItem, UnorderedList } from "@chakra-ui/react";

const RecipeCategories = () => {
  return (
    <div>
      <Heading size="sm">Recipe Categories</Heading>
      <UnorderedList>
        <ListItem>Foods</ListItem>
        <ListItem>Desserts</ListItem>
        <ListItem>Cakes</ListItem>
      </UnorderedList>
    </div>
  );
};

export default RecipeCategories;
