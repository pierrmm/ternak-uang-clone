import Card from '@/components/Card';
import Card2 from '@/components/Card2';
import Event from '@/components/Event';
import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import React from 'react';
import { View, Text, Image, TouchableOpacity, ScrollView, SafeAreaView } from 'react-native';
import tw from 'twrnc';

const Index = () => {
  const navigation = useRouter();
  const [showNotification, setShowNotification] = React.useState(true);

  React.useEffect(() => {
    console.log('komponen di tampilkan');
    return () => {
      setShowNotification(false);
      console.log('komponen di sembunyikan');
    };
  }, []);

  const cardData = [
    {
      img: require('@/assets/images/banner.png'),
      title: "Yuk, Ikuti Tes Finansial! Tes Finansial",
      tgl: "Hari ini, 12:00 WIB",
      harga: "Free"
    },

    {
      img: require('@/assets/images/personal-finance.png'),
      title: "Yuk, Ikuti Tes Finansial! Tes Finansial",
      tgl: "Hari ini, 12:00 WIB",
      harga: "Free"
    },

    {
      img: require('@/assets/images/banner.png'),
      title: "Yuk, Ikuti Tes Finansial! Tes Finansial",
      tgl: "Hari ini, 12:00 WIB",
      harga: "Free"
    }
  ];

  const cardData2 = [
    {
      img: require('@/assets/images/personal-finance.png'),
      title: "Yuk, Ikuti Tes Finansial! Tes Finansial",
      tgl: "Hari ini, 12:00 WIB",
      harga: "Free"
    },

    {
      img: require('@/assets/images/test.png'),
      title: "Yuk, Ikuti Tes Finansial! Tes Finansial",
      tgl: "Hari ini, 12:00 WIB",
      harga: "Free"
    },

    {
      img: require('@/assets/images/banner.png'),
      title: "Yuk, Ikuti Tes Finansial! Tes Finansial",
      tgl: "Hari ini, 12:00 WIB",
      harga: "Free"
    }
  ];

  const cardData3 = [
    {
      items: [
        { icon: require('../../assets/images/income.png'), title: 'Manajemen Income', color: 'neutral-800' },
        { icon: require('../../assets/images/asuransi.png'), title: 'Asuransi', color: 'neutral-800' },
        { icon: require('../../assets/images/saham.png'), title: 'Saham', color: 'neutral-800' },
        { icon: require('../../assets/images/reksa dana.png'), title: 'Reksa Dana', color: 'neutral-800' },
        { icon: require('../../assets/images/crypto.png'), title: 'Cryptocurrency', color: 'neutral-800' },
        { icon: require('../../assets/images/to.png'), title: 'Peer-to-Peer Landing', color: 'neutral-800' },
        { icon: require('../../assets/images/obligasi.png'), title: 'Obligasi', color: 'neutral-800' },
        { icon: require('../../assets/images/lainnya.png'), title: 'Lainnya', color: 'neutral-800' },
      ],
      cardTitle: '📖 Mau Belajar Apa Hari Ini'
    }
  ];

  const card2Data = [
    {
      img: require('@/assets/images/banner.png'),
      title: "Strategi Bisnis Investasi yang Efektif",
      subtitle : "Beginner",
      number: "12"
    },

    {
      img: require('@/assets/images/personal-finance.png'),
      title: "Strategi Bisnis Investasi yang Efektif",
      subtitle : "Beginner",
      number: "12"
    },
  ];

  return (
    <SafeAreaView style={tw`flex-1 bg-black p-5 pt-10`}>
      <ScrollView showsVerticalScrollIndicator={false}>
        {showNotification && (
          <View style={tw`bg-neutral-800 p-2 rounded-lg mb-5 mt-5`}>
            <View style={tw`flex-row items-center`}>
              <MaterialCommunityIcons name="bell-badge" size={24} color="white" style={tw`mr-2 bg-neutral-600 p-2 rounded-full`} />
              <View>
                <Text style={tw`text-white`}>Nikmati insight, berita dan update terkini</Text>
                <Text style={tw`text-green-400`}>nyalakan notifikasi</Text>
              </View>
              <TouchableOpacity style={tw`flex-1 items-end`} onPress={() => setShowNotification(false)}>
                <Ionicons name="close-outline" size={24} color="white" />
              </TouchableOpacity>
            </View>
          </View>
        )}
        <ScrollView horizontal showsHorizontalScrollIndicator={false} style={tw`mb-5`}>
          <Image
            source={require('../../assets/images/banner.png')}
            style={tw`w-[410px] h-40 rounded-lg mr-3`}
            resizeMode="contain"
          />
          <Image
            source={require('../../assets/images/banner.png')}
            style={tw`w-[410px] h-40 rounded-lg mr-3`}
            resizeMode="contain"
          />
          <Image
            source={require('../../assets/images/banner.png')}
            style={tw`w-[410px] h-40 rounded-lg mr-3`}
            resizeMode="contain"
          />        </ScrollView>
        <View style={tw`flex-row justify-between mb-5`}>
          <TouchableOpacity style={tw`bg-neutral-800 p-4 rounded-lg flex-1 mr-2 items-center border-l-4 border-l-green-500`}>
            <View style={tw`flex-row items-center`}>
              <Ionicons name="book-outline" size={24} color="white" style={tw`mr-2`} />
              <Text style={tw`text-white text-center font-bold`}>Modul Akademi</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity style={tw`bg-neutral-800 p-4 rounded-lg flex-1 ml-2 items-center border-l-4 border-l-green-500`}>
            <View style={tw`flex-row items-center`}>
              <Ionicons name="people-outline" size={24} color="white" style={tw`mr-2`} />
              <Text style={tw`text-white text-center font-bold`}>Community</Text>
            </View>
          </TouchableOpacity>
        </View>
        <View style={tw`flex-row justify-between mb-5`}>
          <TouchableOpacity style={tw`bg-neutral-800 p-4 rounded-lg flex-1 mr-2 items-center border-l-4 border-l-green-500`}>
            <View style={tw`flex-row items-center`}>
              <Ionicons name="calendar-outline" size={24} color="white" style={tw`mr-2`} />
              <Text style={tw`text-white text-center font-bold`}>Event Live</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity style={tw`bg-neutral-800 p-4 rounded-lg flex-1 ml-2 items-center border-l-4 border-l-green-500`}>
            <View style={tw`flex-row items-center`}>
              <Ionicons name="chatbubbles-outline" size={24} color="white" style={tw`mr-2`} />
              <Text style={tw`text-white text-center font-bold`}>Grup Diskusi</Text>
            </View>
          </TouchableOpacity>
        </View>
        <View style={tw`bg-neutral-800 p-4 rounded-lg flex-row items-center mb-5`}>
          <Image
            source={require('../../assets/images/test.png')}
            style={tw`w-24 h-16 mr-3`}
            resizeMode="cover"
          />
          <View style={tw`flex-1`}>
            <Text style={tw`text-white text-lg font-bold`}>Yuk, Ikuti <Text style={tw`text-green-500 font-bold`}>Tes Finansial</Text>!</Text>
            <Text style={tw`text-gray-400`}>Dapatkan Saran & Rekomendasi Belajarmu</Text>
          </View>
          <TouchableOpacity style={tw`bg-green-500 p-3 rounded-full`}>
            <Ionicons name="arrow-forward" size={24} color="black" />
          </TouchableOpacity>
        </View>
        <Ionicons name="arrow-forward" size={24} color="black" />
        <View style={tw`flex-row justify-between items-center px-4 py-2`}>
          <Text style={tw`text-lg text-white font-bold`}>📆 Ikuti Live Event Terdekat</Text>
          <TouchableOpacity>
            <Text style={tw`text-gray-600`}>Lihat Semua</Text>
          </TouchableOpacity>
        </View>
        <View style={tw`p-2`}>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            <View style={tw`flex-row gap-4`}>
              {cardData.map((card, index) => (
                <Event key={index} img={card.img} title={card.title} tgl={card.tgl} harga={card.harga} />
              ))}
            </View>
          </ScrollView>

          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            <View style={tw`flex-row gap-4 mt-5`}>
              {cardData2.map((card, index) => (
                <Event key={index} img={card.img} title={card.title} tgl={card.tgl} harga={card.harga} />
              ))}

            </View>
          </ScrollView>
        </View>

        <View style={tw`flex-1 bg-black pt-8`}>
          <View style={tw`flex-row flex-wrap justify-between px-4`}>
            {cardData3.map((card, index) => (
              <Card key={index} items={card.items} cardTitle={card.cardTitle} />
            ))}
          </View>
        </View>
        <View style={tw`p-2`}>
          <Text style={tw`text-lg text-white font-bold mb-2`}>🎉Terbaru di Ternak Uang!</Text>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            {[
              "Modul",
              "Watchlist",
              "News",
              "Event",
              "Report",
              "Record",
              "Investasi",
              "Properti"
            ].map((item, index) => (
              <View key={index} style={tw`mr-4 bg-neutral-900 px-4 py-2 rounded-lg border-2 border-neutral-500`}>
                <Text style={tw`text-white`}>{item}</Text>
              </View>
            ))}
          </ScrollView>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          <View style={tw`flex-row mt-5 gap-4`}>
              {card2Data.map((card2, index) => (
                <Card2 key={index} img={card2.img} title={card2.title} subtitle={card2.subtitle} number={card2.number} />
              ))}
            </View>
            </ScrollView>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};
export default Index;