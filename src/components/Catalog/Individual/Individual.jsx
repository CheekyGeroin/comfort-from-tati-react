import { useState } from 'react';
import { desktopPoint, mobilePoint, tabletPoint } from 'utils/breakpoints';
import {
  bgBackBtn,
  bgHoverBackBtn,
  boxShadowHoverIndForward,
  boxShadowIndBack,
  boxShadowIndBackHover,
  boxShadowIndForward,
  btnBgColor,
  hoverBtnColor,
} from 'utils/variables';
import {
  Container,
  Form,
  FormContainer,
  Input,
  Item,
  Label,
  List,
  Option,
  Select,
  SelectContainer,
  SelectItem,
  SelectList,
  Textarea,
  Title,
  TitleContainer,
  ButtonContainer,
  ButtonList,
  ButtonItem,
  Btn,
} from './Individual.styled';
import IndividualSvgSelector from './IndividualSvgSelector';

const Individual = () => {
  const [category, setCategory] = useState('');
  const [type, setType] = useState('');
  const [size, setSize] = useState('');
  const [color, setColor] = useState('');
  const [comment, setComment] = useState('');
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const [nickname, setNickname] = useState('');

  const handleChange = e => {
    const { name, value } = e.target;
    switch (name) {
      case 'category':
        setCategory(value);
        break;
      case 'type':
        setType(value);
        break;
      case 'size':
        setSize(value);
        break;
      case 'colour':
        setColor(value);
        break;
      case 'comment':
        setComment(value);
        break;
      case 'name':
        setName(value);
        break;
      case 'number':
        setNumber(value);
        break;
      case 'nickname':
        setNickname(value);
        break;
      default:
        return;
    }
  };
  const handleSubmit = e => {
    e.preventDefault();

    console.log(category);
    if (type !== '') {
      console.log(type);
    }
    console.log(size);
    console.log(color);
    console.log(comment);
    console.log(name);
    console.log(number);
    console.log(nickname);

    reset();
  };

  const reset = () => {
    setCategory('');
    setType('');
    setSize('');
    setColor('');
    setComment('');
    setName('');
    setNumber('');
    setNickname('');
  };

  const mobileOrTabletWidth = tabletPoint || mobilePoint;
  return (
    <Container>
      <Form onSubmit={handleSubmit}>
        <SelectContainer>
          <TitleContainer>
            <Title>???????????????????????? ????????????</Title>
          </TitleContainer>
          <SelectList>
            <SelectItem>
              <Label>
                ?????????????????? ????????????
                <Select name="category" onChange={handleChange}>
                  <Option value="-"> </Option>
                  <Option value="plaids">????????</Option>
                  <Option value="bathroom">?????????????? ?? ??????????</Option>
                  <Option value="kids">?????????????? ????????</Option>
                </Select>
              </Label>
            </SelectItem>
            <SelectItem>
              <Label>
                ????????????????
                {category === 'bathroom' && (
                  <Select name="type" onChange={handleChange} disabled>
                    <Option value="-"> </Option>
                    <Option value="braided">????????????????</Option>
                    <Option value="heart">??????????????????</Option>
                    <Option value="honey">????????</Option>
                  </Select>
                )}
                {category !== 'bathroom' && (
                  <Select name="type" onChange={handleChange}>
                    <Option value="-"> </Option>
                    <Option value="braided">????????????????</Option>
                    <Option value="heart">??????????????????</Option>
                    <Option value="honey">????????</Option>
                  </Select>
                )}
              </Label>
            </SelectItem>
            <SelectItem>
              <Label>
                ????????????
                <Input
                  type="text"
                  name="size"
                  placeholder="?????????????? ?????????????? ????????????"
                  onChange={handleChange}
                />
              </Label>
            </SelectItem>
            <SelectItem>
              <Label>
                ??????????
                <Select name="colour" onChange={handleChange}>
                  <Option value="-"> </Option>
                  <Option value="black">????????????</Option>
                  <Option value="white">??????????</Option>
                </Select>
              </Label>
            </SelectItem>
            <SelectItem>
              <Label>
                ??????????????????
                <Textarea
                  cols="55"
                  rows="10"
                  name="comment"
                  onChange={handleChange}
                ></Textarea>
              </Label>
            </SelectItem>
          </SelectList>
        </SelectContainer>
        <FormContainer>
          <TitleContainer>
            <Title>???????????????? ????????</Title>
          </TitleContainer>
          <List>
            <Item>
              <Label>
                ????????? ???? ????????????????
                <Input type="text" name="name" onChange={handleChange} />
              </Label>
            </Item>
            <Item>
              <Label>
                ?????????? ????????????????
                <Input type="tel" name="number" onChange={handleChange} />
              </Label>
            </Item>
            <Item>
              <Label>
                ?????? ?? ??????????????????
                <Input type="text" name="nickname" onChange={handleChange} />
              </Label>
            </Item>
          </List>
        </FormContainer>
        <ButtonContainer>
          <ButtonList>
            <ButtonItem>
              <Btn
                type="button"
                bgColor={`${bgBackBtn}`}
                boxShadow={`${boxShadowIndBack}`}
                bgHoverColor={`${bgHoverBackBtn}`}
                boxShadowHover={`${boxShadowIndBackHover}`}

              >
                <IndividualSvgSelector id={'arrow'} />
                ??????????
              </Btn>
            </ButtonItem>
            <ButtonItem>
              {desktopPoint && <Btn
                type="submit"
                bgColor={`${btnBgColor}`}
                boxShadow={`${boxShadowIndForward}`}
                bgHoverColor={`${hoverBtnColor}`}
                boxShadowHover={`${boxShadowHoverIndForward}`}
              >
                ???????????????????? ????????????????????
              </Btn>}
              {mobileOrTabletWidth &&<Btn
                type="submit"
                bgColor={`${btnBgColor}`}
                boxShadow={`${boxShadowIndForward}`}
                bgHoverColor={`${hoverBtnColor}`}
                boxShadowHover={`${boxShadowHoverIndForward}`}
              >
                ????????????????????
              </Btn>}
            </ButtonItem>
          </ButtonList>
        </ButtonContainer>
      </Form>
    </Container>
  );
};
export default Individual;
