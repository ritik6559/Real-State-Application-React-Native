import { View, Text, Dimensions, Image, Platform, TouchableOpacity } from 'react-native'
import React from 'react'
import { router, useLocalSearchParams } from 'expo-router'
import { useAppwrite } from '@/lib/useAppwrite';
import { getPropertyById } from '@/lib/appwrite';
import { ScrollView } from 'react-native-gesture-handler';
import images from '@/constants/images';
import { routeToScreen } from 'expo-router/build/useScreens';
import icons from '@/constants/icons';

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

            <View className='absolute z-50 inset-x-7' style={{ top: Platform.OS == 'ios' ? 70 : 20 }} >
                <View className='flex flex-row items-center w-full justify-between' >
                    <TouchableOpacity 
                        onPress={() => router.back()}
                        className='flex flex-row bg-primary-200 rounded-full size-11 items-center justify-center '
                    >
                       <Image source={ icons.backArrow } className='size-7' /> 
                    </TouchableOpacity>


                    <View className='flex flex-row items-center gap-3' >
                        <Image source={ icons.heart } className='size-7' tintColor={"#191d31"} />
                        <Image source={ icons.send } className="size-7" />
                    </View>
                </View>
            </View>
        </View>

        <View className='px-5 mt-7 flex' >
            <Text className='text-2xl font-rubik-extrabold' >{property?.name}</Text>
        </View>

        <View className='flex flex-row items-center gap-3 px-5' >
            <View className='items-center px-4 py-2 bg-primary-100 rounded-full' >
                <Text className='text-xs font-rubik-bold text-primary-300' >{property?.type}</Text>
            </View>

            <View className='flex flex-row items-center rounded-full bg-primary-100 gap-2' >
                <Image source={icons.star} className='size-5' />
                <Text>{property?.rating} {property?.rating.length}</Text>
                </View>
        </View>


        <View className='flex flex-row items-center mt-5 px-5'>
            <View className='flex flex-row item-center rounded-full justify-center bg-primary-100 size-10 items-center' >
                <Image source={icons.bed} className='size-4' />
            </View>
            <Text className='text-black-300 text-sm font-rubik-medium ml-2' >
             {property?.bedrooms} bed
            </Text>
             <View className="flex flex-row items-center justify-center bg-primary-100 rounded-full size-10 ml-7">
              <Image source={icons.bath} className="size-4" />
            </View>
            <Text className="text-black-300 text-sm font-rubik-medium ml-2">
              {property?.bathrooms} Baths
            </Text>
            <View className="flex flex-row items-center justify-center bg-primary-100 rounded-full size-10 ml-7">
              <Image source={icons.area} className="size-4" />
            </View>
            <Text className="text-black-300 text-sm font-rubik-medium ml-2">
              {property?.area} sqft
            </Text>
        </View>

        <View className="w-full border-t border-primary-200 pt-7 mt-5 px-5">
            <Text className="text-black-300 text-xl font-rubik-bold">
              Agent
            </Text>

            <View className="flex flex-row items-center justify-between mt-4">
              <View className="flex flex-row items-center">
                <Image
                  source={{ uri: property?.agent.avatar }}
                  className="size-14 rounded-full"
                />

                <View className="flex flex-col items-start justify-center ml-3">
                  <Text className="text-lg text-black-300 text-start font-rubik-bold">
                    {property?.agent.name}
                  </Text>
                  <Text className="text-sm text-black-200 text-start font-rubik-medium">
                    {property?.agent.email}
                  </Text>
                </View>
              </View>

              <View className="flex flex-row items-center gap-3">
                <Image source={icons.chat} className="size-7" />
                <Image source={icons.phone} className="size-7" />
              </View>
            </View>
          </View>
           
          <View className="mt-7 px-5">
            <Text className="text-black-300 text-xl font-rubik-bold">
              Overview
            </Text>
            <Text className="text-black-200 text-base font-rubik mt-2">
              {property?.description}
            </Text>
          </View>
      </ScrollView>


       <View className="absolute bg-white bottom-0 w-full rounded-t-2xl border-t border-r border-l border-primary-200 p-7">
        <View className="flex flex-row items-center justify-between gap-10">
          <View className="flex flex-col items-start">
            <Text className="text-black-200 text-xs font-rubik-medium">
              Price
            </Text>
            <Text
              numberOfLines={1}
              className="text-primary-300 text-start text-2xl font-rubik-bold"
            >
              ${property?.price}
            </Text>
          </View>

          <TouchableOpacity className="flex-1 flex flex-row items-center justify-center bg-primary-300 py-3 rounded-full shadow-md shadow-zinc-400">
            <Text className="text-white text-lg text-center font-rubik-bold">
              Book Now
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  )
}

export default Property 
