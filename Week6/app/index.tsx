import {
  SafeAreaView,
  View,
  FlatList,
  StyleSheet,
  Text,
  StatusBar,
  Image,
  TouchableOpacity
} from 'react-native';

const DATA:ItemData[] = [{
  id:1,
  name:'Ca nấu lẩu, nấu súp mini...',
  shop:'Devang',
  img:'ca_nau_lau.png'
},
{id:2,
  name:'1KG KHÔ GÀ BƠ TỎI...',
  shop:'LTD Food',
  img:'ga_bo_toi.png'
},
{id:3,
  name:'Xe cần cẩu đa năng...',
  shop:'Thế giới đồ chơi',
  img:'xa_can_cau.png'
},

{id:4,
  name:'Đồ chơi dạng mô hình.',
  shop:'Thế giới đồ chơi',
  img:'do_choi_dang_mo_hinh.png'
},

{id:5,
  name:'Lãnh đạo giản đơn...',
  shop:'Minh Long Book',
  img:'lanh_dao_gian_don.png'
},
{id:6,
  name:'Hiểu lòng trẻ con',
  shop:'Minh Long Book',
  img:'hieu_long_con_tre.png'
},
{id:7,
  name:'Tổng thống thiên tài',
  shop:'Minh Long Book',
  img:'hieu_long_con_tre.png'
},
]


const Item = ({item}) => (
  <View style={styles.item}>
    <Image source={require('do_choi_dang_mo_hinh.png')}/>
    <View style={{}}>
      <Text style={styles.title}>{item.name}</Text>
      <Text style={styles.titleShop}>Shop {item.shop}</Text>
    </View>
    <View style = {{justifyContent:'center'}}>
    <TouchableOpacity style={styles.btn}>
      <Text style = {{color:'white'}}>Chat</Text>
    </TouchableOpacity>
    </View>
  </View>
);
export default function App() {
  return (
        <SafeAreaView style={styles.container}>
        <Text style={{margin:10}}>
          Bạn có thắc mắc với sản phẩm vừa xem đừng ngại chát với shop!
        </Text>
      <FlatList
        data={DATA}
        renderItem={Item}
        keyExtractor={item => item.id}
      />
    </SafeAreaView>

  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  item: {
    backgroundColor: '#ebedf0',
    flexDirection:'row',
    justifyContent:'space-between',
    borderBottomWidth:1,
    borderColor:'#e0e0de'
  },
  title: {
    fontSize: 12,
  },
  titleShop: {
    fontSize: 12,
    color:'red'
  },
  btn:{
    backgroundColor:'red',
    flexDirection:'column',
    width:88,
    height:38,
    justifyContent:'center',
    alignItems:'center',
  }
});
