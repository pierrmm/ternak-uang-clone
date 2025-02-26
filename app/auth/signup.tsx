import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { StatusBar } from 'expo-status-bar';
import { create } from 'twrnc';
import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';

const tw = create();

const SignIn = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const navigation = useRouter();
    return (
        <SafeAreaView style={tw`flex-1 bg-black`}>
            <StatusBar style="light" />
            <View style={tw`flex justify-center items-center  top-2 z-10`}>
                <TouchableOpacity style={tw`absolute left-4`} onPress={() => navigation.back()}>
                    <Ionicons name="chevron-back" size={24} color="white" />
                </TouchableOpacity>
                <Text style={tw`text-2xl font-bold text-white`}>Daftar Akun</Text>
            </View>
            <View style={tw`flex-1 px-4 justify-center`}>


                <View style={tw`mb-4`}>
                    <TextInput
                        style={tw`bg-[#1C1C1E] text-white py-3 px-4 rounded-lg`}
                        placeholder="chamjo@gmail.com"
                        placeholderTextColor="#6B7280"
                        value={email}
                        onChangeText={setEmail}
                        keyboardType="email-address"
                    />
                </View>

                <View style={tw`mb-4 relative`}>
                    <TextInput
                        style={tw`bg-[#1C1C1E] text-white py-3 px-4 rounded-lg pr-10`}
                        placeholder="Password"
                        placeholderTextColor="#6B7280"
                        secureTextEntry={!showPassword}
                        value={password}
                        onChangeText={setPassword}
                    />
                    <TouchableOpacity
                        style={tw`absolute right-3 top-3`}
                        onPress={() => setShowPassword(!showPassword)}
                    >
                        <Ionicons
                            name={showPassword ? 'eye-off' : 'eye'}
                            size={24}
                            color="#6B7280"
                        />
                    </TouchableOpacity>
                </View>



                <TouchableOpacity style={tw`bg-[#00FF00] py-3 rounded-lg mb-5`}>
                    <Text style={tw`text-black text-center font-bold`}>Daftar</Text>
                </TouchableOpacity>

                <View style={tw`flex-row justify-start mb-15`}>
                    <Text style={tw`text-gray-400`}>Dengan mendaftar kamu menyetujui Syarat dan Ketentuan, Privacy Policy dan Disclamer</Text>
                </View>


            </View>
        </SafeAreaView>);
};
export default SignIn;