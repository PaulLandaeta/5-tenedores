import {createStackNavigator} from 'react-navigation-stack';
import Restaurant from '../screens/Restaurants';

export const RestaurantScreenStacks = createStackNavigator(
    {
        Restaurants: {
            screen:Restaurant,
            navigationOptions: () => ({
                title: 'Restaurante'
            })
        }
    }
)

export default RestaurantScreenStacks;