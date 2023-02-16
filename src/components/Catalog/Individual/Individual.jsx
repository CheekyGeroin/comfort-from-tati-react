import { Container, SelectForm, Form, FormContainer, Input, Item, Label, List, Option, Select, SelectContainer, SelectItem, SelectList, Textarea, Title, TitleContainer } from "./Individual.styled";

const Individual = () => {
  return (
    <Container>
      <SelectContainer>
        <TitleContainer>
          <Title>Найменування товару</Title>
        </TitleContainer>
        <SelectForm>
          <SelectList>
            <SelectItem>
              <Label>
                Категорія товару
                <Select name="category">
                  <Option value="-"> </Option>
                  <Option value="plaids">Великі пледи</Option>
                  <Option value="kids">Дитячі пледи</Option>
                  <Option value="bathroom">Килим у ванну</Option>
                </Select>
              </Label>
            </SelectItem>
            <SelectItem>
              <Label>
                Плетіння
                <Select name="type">
                  <Option value="-"> </Option>
                  <Option value="heart">Серденько</Option>
                  <Option value="honey">Соти</Option>
                  <Option value="braided">Плетінка</Option>
                  <Option value="kids">Дитячі</Option>
                  <Option value="bath">Килим у ванну</Option>
                </Select>
              </Label>
            </SelectItem>
            <SelectItem>
              <Label>
                Розмір
                <Select name="size">
                  <Option value="-"> </Option>
                  <Option value="huge">Великий</Option>
                  <Option value="medium">Середній</Option>
                  <Option value="small">Маленький</Option>
                </Select>
              </Label>
            </SelectItem>
            <SelectItem>
              <Label>
                Колір
                <Select name="colour">
                  <Option value="-"> </Option>
                  <Option value="black">Чорний</Option>
                  <Option value="white">Білий</Option>
                </Select>
              </Label>
            </SelectItem>
            <SelectItem>
              <Label>
                Побажання
                <Textarea cols="55" rows="10"></Textarea>
              </Label>
            </SelectItem>
          </SelectList>
        </SelectForm>
      </SelectContainer>
      <FormContainer>
        <TitleContainer>
          <Title>Особисті дані</Title>
        </TitleContainer>
        <Form>
          <List>
            <Item>
              <Label>
                Ім’я та прізвище
                <Input type="text" name="name" />
              </Label>
            </Item>
            <Item>
              <Label>
                Номер телефону
                <Input type="tel" name="phone" />
              </Label>
            </Item>
            <Item>
              <Label>
                Нік в телеграмі
                <Input type="text" name="nickname" />
              </Label>
            </Item>
          </List>
        </Form>
      </FormContainer>
      <div>
        <ul>
          <li>
            <button></button>
          </li>
          <li>
            <button></button>
          </li>
        </ul>
      </div>
    </Container>
  );
};
export default Individual;
