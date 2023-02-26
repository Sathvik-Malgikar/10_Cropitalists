import { StyleSheet, Text, View } from "react-native";
import { React, useState, useEffect } from "react";
import styles from "./styles";

const NewInvestorHistory = () => {
  const [invtarr, setinvtarr] = useState([]);
  useEffect(() => {
    setinvtarr([
      {
        amount: "184.3223",
        invstrname: "Govinda",
        txId: "12323",
        amtStock: "200",
        nameStock: "YELL123MZE",
      },
      {
        amount: "191.3223",
        invstrname: "JamaBhai",
        txId: "12393",
        amtStock: "180",
        nameStock: "YELL123BNS",
      },
      {
        amount: "146.3223",
        invstrname: "Scandy",
        txId: "11993",
        amtStock: "180",
        nameStock: "YELL123MZE",
      },
      {
        amount: "189.38823",
        invstrname: "Jack",
        txId: "12813",
        amtStock: "180",
        nameStock: "YELL123MZE",
      },
    ]);
  }, []);
  return (
    <View style={{ width: "100%" }}>
      {invtarr.length == 0 ? (
        <Text>Loading</Text>
      ) : (
        invtarr.map((stock) => {
          return (
            <InvestorTile
              amount={stock.amount}
              invstrname={stock.invstrname}
              txId={stock.txId}
              amtStock={stock.amtStock}
              nameStock={stock.nameStock}
            />
          );
        })
      )}
    </View>
  );
};

const InvestorTile = ({ amount, invstrname, txId, amtStock, nameStock }) => {
  return (
    <View
      style={{
        backgroundColor: "#88ff9c",
        margin: 3,
        padding: 6,
        borderRadius: 8,
        width: "100%",
      }}
    >
      <View>
        <Text style={{ fontSize: 18 }}>Investor: {invstrname}</Text>
      </View>
      <View>
        <Text style={{ fontSize: 18 }}>Amount: {amount}</Text>
      </View>
      <View>
        <Text style={{ fontSize: 18 }}>Amount of Stocks: {invstrname}</Text>
      </View>
      <View>
        <Text style={{ fontSize: 18 }}>Name of Stock: {nameStock}</Text>
      </View>
    </View>
  );
};

export default NewInvestorHistory;
