import { InMemoryDbService } from 'angular-in-memory-web-api';

export class GiaovienApiService implements InMemoryDbService {
    createDb(){
        const giaoviens = [
            {id: 1, name : 'Thien Sinh', address : 'Tam Kỳ'},
            {id: 2, name : 'Quoc De Thuong', address : "Đại Lộc"},
            {id: 1, name : 'Thanh Cui', address :'Phú Ninh'},
        ]
        return {giaoviens};
    }
}