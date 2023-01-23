import React, { useEffect, useState } from "react";
import X2JS from "x2js";
import Item from "../Item/Item";
import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 25px;
  padding: 40px;
`;

const Home = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("https://front-end-technical-test-bvhzjr6b6a-ew.a.run.app/")
      .then((res) => res.json())
      .then((data) => setData(parseData(data)));
  }, []);

  const parseData = (data) => {
    return data.map((item) => {
      const { tapons, tampons } = item;

      const mergedTamponObject = tapons || tampons;

      if (typeof mergedTamponObject === "string") {
        const x2js = new X2JS();
        const parsedXML = x2js.xml2js(mergedTamponObject);
        return { ...item, tampons: parsedXML.tapons.tampon };
      }
      return { ...item, tampons: mergedTamponObject };
    });
  };

  return (
    <Wrapper>
      {data.map((item, i) => (
        <Item key={i} {...item} />
      ))}
    </Wrapper>
  );
};

export default Home;
