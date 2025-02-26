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
            <View style={tw`flex-1 px-4 justify-center`}>
                <View style={tw`mb-8`}>
                    <Text style={tw`text-white text-3xl font-bold mb-4`}>TERNAKUANG.</Text>
                </View>

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

                <View style={tw`mb-4`}>
                    
                    <TouchableOpacity>
                        <Text style={tw`text-[#00FF00] text-right`}>Lupa Password?</Text>
                    </TouchableOpacity>
                </View>

                <TouchableOpacity style={tw`bg-[#00FF00] py-3 rounded-lg mb-5`} onPress={() => navigation.push('/(tabs)/home')}>
                    <Text style={tw`text-black text-center font-bold`}>Log In</Text>
                </TouchableOpacity>

                <View style={tw`flex-row justify-center mb-15`}>
                    <Text style={tw`text-white`}>Belum punya akun? </Text>
                    <TouchableOpacity onPress={() => navigation.push('/auth/signup')}>
                        <Text style={tw`text-[#00FF00] font-bold`}>Daftar</Text>
                    </TouchableOpacity>
                </View>

                <Text style={tw`text-white text-sm text-center mb-10`}>Atau Masuk Melalui</Text>

                <View style={tw`flex-row justify-center gap-5 space-x-4`}>
                    <TouchableOpacity style={tw`bg-black border border-white p-2 rounded-md`}>
                        <Ionicons
                            name="logo-google"
                            size={24}
                            color="white"
                        />
                    </TouchableOpacity>
                    <TouchableOpacity style={tw`bg-black border border-white p-2 rounded-md`}>
                        <Ionicons
                            name="logo-apple"
                            size={24}
                            color="white"
                        />
                    </TouchableOpacity>
                </View>
            </View>
        </SafeAreaView>
    );
};

export default SignIn;