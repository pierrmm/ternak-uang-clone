import { useRouter } from 'expo-router';
import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import tw from 'twrnc';

const Index = () => {
    const navigation = useRouter();
  return (
    <View style={tw`flex-1 bg-black p-5 justify-center`}>
      <View style={tw`items-center mb-5`}>
        <Image
          source={require('../assets/images/personal-finance.png')}
          style={tw`w-[500px] h-[400px]`}          resizeMode="contain"
        />
      </View>
      <Text style={tw`text-2xl font-bold text-white text-center`}>Belajar Investasi</Text>
      <Text style={tw`text-2xl font-bold text-white text-center mb-5`}>& Keuangan Pribadi</Text>
      <Text style={tw`text-sm text-gray-400 text-center mb-7`}>
        Belajar paling gampang, praktis, & interaktif dengan menonton video secara online dengan lebih dari 150+ video dari mentor yang sudah ahli di bidangnya.
      </Text>
      <View style={tw`flex-row justify-center mb-7`}>
        <View style={tw`w-2 h-2 rounded-full bg-green-500 mx-1`} />
        <View style={tw`w-2 h-2 rounded-full bg-gray-600 mx-1`} />
        <View style={tw`w-2 h-2 rounded-full bg-gray-600 mx-1`} />
      </View>
      <TouchableOpacity style={tw`bg-green-500 py-4 rounded-lg mb-2.5`} onPress={() => navigation.push('/auth/signin')}>
        <Text style={tw`text-black text-base font-bold text-center`}>Mulai Belajar</Text>
      </TouchableOpacity>
      <TouchableOpacity style={tw`bg-transparent py-4 rounded-lg border border-gray-400`} onPress={() => navigation.push('/auth/signin')}>
        <Text style={tw`text-gray-200 text-base font-bold text-center`}>Login</Text>
      </TouchableOpacity>    
      </View>
  );
};

export default Index;