import { Image, Text, View, ImageSourcePropType, TouchableOpacity } from 'react-native'
import React from 'react'
import tw from 'twrnc'

interface Card2Props {
    img: ImageSourcePropType;
    title: string;
    subtitle: string;
    number: string;
}

const Card2: React.FC<Card2Props> = ({ img, title, subtitle, number }) => {
    return (
        <View style={tw`w-60 mr-4 bg-neutral-800 rounded-lg mb-4 overflow-hidden`}>
            <View style={tw`relative`}>
                <Image
                    source={img}
                    style={tw`w-full h-40`}
                    resizeMode="cover"
                />
            </View>
            <View style={tw`p-4`}>
                <Text style={tw`text-white font-bold`}>{title}</Text>
                <View style={tw`flex-row justify-between mt-10`}>
                    <Text style={tw`text-gray-400 text-sm`}>{subtitle}</Text>
                    <TouchableOpacity style={tw` text-sm ml-2 bg-white px-2 py-1 rounded-xl`}>
                        <Text style={tw`text-black font-bold text-sm`}>{number} Video</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>    )
}

export default Card2

