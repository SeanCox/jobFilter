# jobFilter
find jobs based on exact skills

#search JSON
let search  = {
    'exp': 'str',
    'cities': {
                'losAngeles': true,
                'sanfransisco': true
                },
    'skills': {
                'javascritpt': true,
                'html': true
               },
    'searchtype': 'software'
}

#job post JSON
let post = {
    'company name': 'str',
    'company logo': 'url',
    'positon': 'str',
    'required skills': [array],
    'location': 'los Angeles',
    'discription': 'str'
}