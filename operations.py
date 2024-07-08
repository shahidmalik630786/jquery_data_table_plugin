import mysql.connector

def _get_databse_connnection():
    connection = mysql.connector.connect(
        host="localhost",
        user="root",
        password="123456",
        database="server_side_processing_validation_jquery"
    )
    return connection

class Database:
    def database_operation(self, query_data):
        return_dict = {}
        try:
            connection = _get_databse_connnection()
            with connection.cursor() as cursor:
                query, params = query_data
                cursor.execute(query, params)
                results = cursor.fetchall()
                connection.commit()
                return_dict = {'success': True, 'data': results}
        except mysql.connector.Error as e:
            print(f"Error occurred: {e}")
            return_dict = {'success': False, 'msg': str(e)}
        finally:
            if 'connection' in locals() and connection.is_connected():
                connection.close()
        return return_dict
    
    def get_count_contact(self):
        return_dict = {}
        _connection = _get_databse_connnection()
        try:
            cursor = _connection.cursor()
            cursor.execute('SELECT count(id) FROM Contact')
            results = cursor.fetchall()
            cursor.close()
            _connection.commit()
            _connection.close()
            return_dict = {'success': True, 'data': results}
        except Exception as e:
            return_dict = {'success': False, 'data': str(e)}
        finally:
            _connection.close()
        return return_dict
