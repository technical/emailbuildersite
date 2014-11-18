/* ===================================
 * Don't change anything here!
 * =================================== */

var elements = {
	'quote': 'Quotation',
	'sep': 'Separator',
	'i_promo': 'iPhone Promotion',
	'm_promo': 'Macbook Promotion',
	'1_2_l': 'Image on the Left',
	'1_2_r': 'Image on the Right',
	'1_4_l': '1/4 Image on the Left',
	'1_4_r': '1/4 Image on the Right',
	'1_1_f': 'Full Size Image',
	'1_2_p': '1/2 Column Images',
	'1_4_p': '1/4 Column Images',
	'm_1_0_1_0': 'Image-Text-Image-Text',
	'm_0_1_0_1': 'Text-Image-Text-Image',
	'm_1_1_0': 'Image-Image-Text',
	'm_1_0_1': 'Image-Text-Image',
	'm_0_1_1': 'Text-Image-Image',
	'm_d_0_1_1': 'Double Text-Image-Image',
	'm_d_1_1_0': 'Double Image-Image-Text',
	'1_1': '1/1 Column',
	'1_2': '1/2 Column',
	'1_4': '1/4 Column',
	'1_2_b_l': '1/2 Productbox Left',
	'1_2_b_r': '1/2 Productbox Right',
	'1_4_b_l': '1/4 Productbox Left',
	'1_4_b_r': '1/4 Productbox Right',
	'1_4_b': '1/4 Productbox',
},

prebuilds = {
	'Big Intro': ['quote', '1_1_f', '1_2'],
	'Productlist': ['1_2_r', '1_2_b_r', '1_2_b_r', '1_2_b_r'],
	'Uni Promoter': ['i_promo','1_1'],
	'Portfolio': ['quote', 'm_d_0_1_1', '1_2', 'm_d_1_1_0'],
	'Huge Portfolio': ['quote', '1_4_p', '1_4_l', '1_4_l', '1_4_l', '1_4_l'],
	'Gallery': ['1_2_p', '1_2_p', '1_2_p', '1_2_l'],
	'Gallery 2': ['quote', '1_4_p', '1_4_p', '1_4_p', '1_4_p'],
	'Mosaic': ['m_0_1_0_1', 'm_1_0_1', 'm_1_1_0', 'm_0_1_0_1', 'm_1_0_1_0'],
	'Infoletter': ['m_promo', '1_2_p', '1_2']
},

colors   = ['61BC0F','7B186A','51B8BD','DF5539','8A8A8A','5D5FC3','61BC0F','7B186A','51B8BD','DF5539','8A8A8A','5D5FC3','9ABC7C','7B6878','95BBBD','DFB0A7','8A8A8A','9D9EC3'];
bgcolors = ['00404F','00404F','00404F','00404F','00404F','00404F','00BAE1','00BAE1','00BAE1','00BAE1','00BAE1','00BAE1','F4F4F4','F4F4F4','F4F4F4','F4F4F4','F4F4F4','F4F4F4'];
