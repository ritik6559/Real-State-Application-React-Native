import { View, Text, Dimensions, Image } from 'react-native'
import React from 'react'
import { useLocalSearchParams } from 'expo-router'
import { useAppwrite } from '@/lib/useAppwrite';
import { getPropertyById } from '@/lib/appwrite';
import { ScrollView } from 'react-native-gesture-handler';
import images from '@/constants/images';

const Property  = () => {

    const { id } = useLocalSearchParams<{ id?: string }>();

    const windowsHeight = Dimensions.get("window").height;


    const { data: property } = useAppwrite({
        fn: getPropertyById,
        params: {
            id: id!,
        }
    });



  return (
    <View>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerClassName="pb-32 bg-white"
      >
        <View className='relative w-full' style={{ height: windowsHeight / 2 }} >
            <Image 
                source={{
                    uri: property?.image
                }}
                className='size-full'
                resizeMode="cover"
            />

            <Image
                source={ images.whiteGradient }
                className='absolute top-0 w-full z-40'
            />
        </View>
        
      </ScrollView>
    </View>
  )
}

export default Property 
