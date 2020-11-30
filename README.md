# Easyflex

Easyflex is a simple React Component that makes the usage of CSS flexbox simple & intuitive.

## Installation

Use the package manager [npm](https://www.npmjs.com/) to install Easyflex.

```bash
npm install 
```

## Basic usage

```jsx
<Easyflex
        id="flex1"
        className="customCSS"
        xaxis="center"
        yaxis="center"
        style={ {background: "black", fontSize: "1em"} }
    >
        <div>1</div>
        <div>2</div>
        <div>3</div>
</Easyflex>
```
You can also nest Easyflex within Easyflex...

## Example of nesting
```jsx
<Easyflex
  id="testFlex"
  className="testContainer"
  xaxis="center"
  yaxis="top"
  column={true}
>
  <Easyflex className="testItem" xaxis="center" yaxis="bottom" style={style}>
    1
  </Easyflex>

  <Easyflex className="testItem" xaxis="center" yaxis="center" style={style}>
    2
  </Easyflex>

  <Easyflex className="testItem" xaxis="center" yaxis="center" style={style}>
    3
  </Easyflex>
</Easyflex>
```



## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.


## License
[MIT](https://choosealicense.com/licenses/mit/)
