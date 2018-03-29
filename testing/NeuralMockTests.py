import unittest
import sys
import os
import csv
import ntpath
import argparse
import time
#import cProfile
from pstats import Stats
sys.path.append(os.path.abspath(os.path.join(os.path.dirname(__file__),
                                             os.path.pardir)))
from tools import Lexer, ScopeAnalyst
from folderManager.folder import Folder
from unicodeManager import UnicodeReader, UnicodeWriter
from experiments import MosesClient
from experiments import TransType

source_file = "testing/test_files/test_file1.obs.js"

class defobfuscate_tests(unittest.TestCase):

    def setUp(self):
        self.client = MosesClient("./testing/performance_output/")

    def testOutput(self):
        '''
        Run an get the result on a file.
        '''
        source_file = "experiments/results/jsnaughty_test_set/1057089.u.no_lit.js"
        text = open(source_file, 'r').read()
        print(text)
        result = self.client.deobfuscateJS(text,False,12345,TransType.NEURAL_SEQ_TAG,True,False,True,True)
        print("RESULT")
        print(result)

if __name__=="__main__":
    parser = argparse.ArgumentParser()
    parser.add_argument("-s", "--source_file",action="store", type=str)
    parser.add_argument("unittest_args", nargs="*")

    args = parser.parse_args()
    source_file = args.source_file

    sys.argv[1:] = args.unittest_args
    unittest.main()
