import json
import requests
import unittest

URL = "http://localhost:3000/posts"
class APITests(unittest.TestCase):
    # check for response 200
    def test_posts_response_code(self):
        response = requests.get(URL)
        assert response.status_code == 200

    # check for number of responses
    def test_num_posts_returned(self):
        response = requests.get(URL)
        assert len(response.json()) == 2


    # check for data
    def test_posts_data_returned(self):
        response = requests.get(URL)
        sample_json_response_file = open('db.json',)
        sample_json_response = json.load(sample_json_response_file)
        assert response.json() == sample_json_response['posts']
        sample_json_response_file.close()

if __name__ == "__main__":
    unittest.main()
