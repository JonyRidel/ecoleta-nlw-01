import React, { useState, useEffect, ChangeEvent } from 'react';
import { Feather as Icon} from '@expo/vector-icons';
import { View, Image, ImageBackground, StyleSheet, Text, TextInput, KeyboardAvoidingView, Platform } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';
import RNPickerSelect from 'react-native-picker-select';

import { useNavigation } from '@react-navigation/native';
import axios from 'axios';
import Picker from 'react-native-picker-select';

interface IBGEUFResponse {
  sigla: string;
}

interface IBGECityResponse {
  nome: string;
}

interface comboUf {
  label: string;
  value: string;
}

interface comboCity {
  label: string;
  value: string;
}

const Home = () => {
  const [cities, setCities] = useState<comboCity[]>([]);
  
  const [selectedUf, setSelectedUf] = useState('0');
  const [selectedCity, setSelectedCity] = useState('0');

  const [estados, setEstados] = useState<comboUf[]>([]);

  const navigation = useNavigation();    

  function handleNavigationToPoints() {
    navigation.navigate('Points', {
      uf: selectedUf,
      city: selectedCity
    });
  }

  useEffect(()=>{
    axios.get<IBGEUFResponse[]>('https://servicodados.ibge.gov.br/api/v1/localidades/estados?orderBy=nome').then(response => {
        let item = Array();

        response.data.map( uf=> {
          item.push({label: uf.sigla, value: uf.sigla});
        });

        setEstados( item );
    })
  }, []);

  useEffect(() => {
    if (selectedUf==='0') {
        return;
    }
    axios.get<IBGECityResponse[]>(`https://servicodados.ibge.gov.br/api/v1/localidades/estados/${selectedUf}/municipios?orderBy=nome`)
        .then(response => {
            let item = Array();

            response.data.map( city=> {
              item.push({label: city.nome, value: city.nome});
            });

            setCities( item );
    });            
  }, [selectedUf]);

  function handleSelectUf(event: ChangeEvent<HTMLSelectElement>) {
    const uf = event.target.value;
    setSelectedUf(uf);
  }

  function handleSelectCity(event: ChangeEvent<HTMLSelectElement>) {
      const city = event.target.value;
      setSelectedCity(city);
  }

  return (
    <KeyboardAvoidingView style={{flex:1}} behavior={Platform.OS === 'ios' ? 'padding': undefined}>
      <ImageBackground 
          style={styles.container} 
          source={require('../../assets/home-background.png')}
          imageStyle={{ width: 274, height: 368 }}
      >
          <View style={ styles.main }>
              <Image source={require('../../assets/logo.png')} />
              <View>
                <Text style={ styles.title}>Seu marketplace de coleta de resíduos</Text>
                <Text style={ styles.description}>Ajudamos pessoas a encotrarem pontos de coleta de forma eficiente</Text>
              </View>
          </View>

          <View style={styles.footer}>
            <RNPickerSelect
                style={pickerSelectStyles}
                //value={selectedUf}
                placeholder={{
                  label:"Selecione a UF"
                }}
                onValueChange={value => {
                  setSelectedUf(value);
                }}
                items={estados}
            />

            <RNPickerSelect
                style={pickerSelectStyles}
                //value={selectedCity}
                placeholder={{
                  label:"Selecione a Cidade"
                }}
                onValueChange={value => {
                  setSelectedCity(value);
                }}
                items={cities}
            />

            <RectButton style={styles.button} onPress={ handleNavigationToPoints }>
                <View style={styles.buttonIcon}>
                    <Text>
                        <Icon name="arrow-right" color="#FFF" size={24} />
                    </Text>
                </View>
                <Text style={styles.buttonText}>
                    Entrar
                </Text>
            </RectButton>
          </View>
      </ImageBackground>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
    container: {
      flex: 1,
      padding: 32,
    },
  
    main: {
      flex: 1,
      justifyContent: 'center',
    },
  
    title: {
      color: '#322153',
      fontSize: 32,
      fontFamily: 'Ubuntu_700Bold',
      maxWidth: 260,
      marginTop: 64,
    },
  
    description: {
      color: '#6C6C80',
      fontSize: 16,
      marginTop: 16,
      fontFamily: 'Roboto_400Regular',
      maxWidth: 260,
      lineHeight: 24,
    },
  
    footer: {},
  
    select: {},
  
    input: {
      height: 60,
      backgroundColor: '#FFF',
      borderRadius: 10,
      marginBottom: 8,
      paddingHorizontal: 24,
      fontSize: 16,
    },
  
    button: {
      backgroundColor: '#34CB79',
      height: 60,
      flexDirection: 'row',
      borderRadius: 10,
      overflow: 'hidden',
      alignItems: 'center',
      marginTop: 8,
    },
  
    buttonIcon: {
      height: 60,
      width: 60,
      backgroundColor: 'rgba(0, 0, 0, 0.1)',
      justifyContent: 'center',
      alignItems: 'center'
    },
  
    buttonText: {
      flex: 1,
      justifyContent: 'center',
      textAlign: 'center',
      color: '#FFF',
      fontFamily: 'Roboto_500Medium',
      fontSize: 16,
    }
  });

  const pickerSelectStyles = StyleSheet.create({
    inputIOS: {
      height: 60,
      backgroundColor: '#FFF',
      borderRadius: 10,
      marginBottom: 8,
      paddingHorizontal: 24,
      fontSize: 16,

      // fontSize: 16,
      // paddingVertical: 12,
      // paddingHorizontal: 10,
      // borderWidth: 1,
      // borderColor: 'gray',
      // borderRadius: 4,
      // color: 'black',
      // paddingRight: 30, // to ensure the text is never behind the icon
    },
    inputAndroid: {
      height: 60,
      backgroundColor: '#FFF',
      borderRadius: 10,
      marginBottom: 8,
      paddingHorizontal: 24,
      fontSize: 16,
      
      // paddingVertical: 8,
      // borderWidth: 0.5,
      // borderColor: 'purple',
      // borderRadius: 8,
      // color: 'black',
      // paddingRight: 30, // to ensure the text is never behind the icon
    },    
  });


export default Home;