import { Text, TextInput, TouchableOpacity, View } from "react-native";
import { styles } from "./styles";
import { useState } from "react";

export default function Home() {
  const [peso, setPeso] = useState("");
  const [altura, setAltura] = useState("");
  const [imc, setImc] = useState("");

  function handleSoma() {
    const num1 = parseFloat(peso);
    const num2 = parseFloat(altura);

    const soma = num1 / (num2 * num2);
    if (soma < 18.5) {
      setImc("Baixo Peso");
    } else if (soma >= 18.5 && soma < 24.9) {
      setImc("Peso Normal");
    } else if (soma >= 25 && soma < 29.9) {
      setImc("Sobrepeso");
    } else if (soma >= 30 && soma < 34.9) {
      setImc("Obesidade Grau 1");
    } else if (soma >= 35 && soma < 39.9) {
      setImc("Obesidade Grau 2");
    } else {
      setImc("Obesidade Grau 3");
    }
  }

  return (
    <View style={styles.container}>
      <View style={styles.container2}>
        <Text style={styles.tittle}>Calculadora de IMC</Text>
        <Text style={styles.subTittle}>
          Descubra qual o seu índice de Massa Corporal
        </Text>
        <View style={styles.container3}>
          <Text style={styles.text}>Peso (Kg)</Text>
          <Text style={styles.text2}>Altura (M)</Text>
        </View>
        <View style={styles.container3}>
          <TextInput style={styles.form} onChangeText={setPeso} value={peso} />
          <TextInput
            style={styles.form2}
            onChangeText={setAltura}
            value={altura}
          />
        </View>
        <TouchableOpacity style={styles.button} onPress={handleSoma}>
          <Text style={styles.textButton}>Calcular</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.container4}>
        <Text style={styles.text3}>Seu índice de massa Corporal é </Text>
        <Text style={styles.text5}>{imc}</Text>
      </View>
      <View style={styles.container5}>
        <Text style={styles.text4}>IMC</Text>
      </View>
    </View>
  );
}
