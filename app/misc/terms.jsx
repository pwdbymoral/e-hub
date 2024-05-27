import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'

const terms = () => {
  return (
    <ScrollView>
        <SafeAreaView className="bg-gray-400 h-full">
            <View className="justify-center items-center">
                <Text className="text-black text-md px-4">-Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque luctus porta purus id cursus. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Donec maximus vitae odio at auctor. Aliquam non erat condimentum, luctus justo et, eleifend mi. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Nullam dictum, orci tempor facilisis euismod, nibh urna pellentesque arcu, a dictum erat odio nec tellus. Ut faucibus hendrerit pharetra. Mauris et consequat lorem. Proin eleifend cursus lacus, a euismod velit semper ac. Interdum et malesuada fames ac ante ipsum primis in faucibus. Sed ornare sapien tellus, vitae scelerisque purus mattis id. Aenean porttitor dolor nec sagittis blandit. Nullam sagittis nibh id ante varius, eget vestibulum velit sagittis.</Text>
                <Text className="text-black text-md mt-4 px-4">-Vestibulum sit amet orci erat. Fusce mollis, ligula id luctus consequat, ante quam luctus ex, in euismod turpis ex pretium lacus. Sed mi quam, eleifend sed auctor at, consequat eget nibh. Cras suscipit neque non odio congue blandit. Aliquam id purus at ligula volutpat efficitur sit amet et diam. Nulla posuere pretium turpis, vulputate varius eros elementum a. Suspendisse ut finibus sapien, ut sagittis purus. Suspendisse ac imperdiet justo, eu tempus justo. Pellentesque eget accumsan nisi. Nam sed finibus nisi, sollicitudin consectetur magna. Suspendisse tempus lacus leo, vel tincidunt libero mattis vitae. Aliquam sit amet condimentum enim. Sed egestas augue at mi ultricies, nec blandit nibh commodo.</Text>
                <Text className="text-black text-md mt-4 px-4">-Curabitur pellentesque blandit molestie. Aliquam erat volutpat. In eget enim ligula. Vivamus sit amet viverra sapien. Duis volutpat lorem ac nibh consectetur, vel ullamcorper dolor tempus. Morbi sollicitudin venenatis facilisis. Nullam tincidunt pulvinar neque. Interdum et malesuada fames ac ante ipsum primis in faucibus. Donec luctus nec purus et sagittis. In feugiat blandit fringilla. <Text className="font-semibold"> Daisuki Laura</Text> Aliquam mattis ipsum elit, nec volutpat quam eleifend eu. Etiam placerat dolor eget porta sollicitudin. Mauris vitae mattis nulla. Ut non erat vulputate, rutrum quam sed, tempus ligula. Phasellus vulputate erat eget scelerisque facilisis. </Text>
            </View>
        </SafeAreaView>
    </ScrollView>
  )
}

export default terms