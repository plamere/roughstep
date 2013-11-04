import simplejson as json
import pprint

f = open('patterns.js')
js = f.read()
patterns = json.loads(js)


print 'digraph bark_state_machine {'

print "    rankdir=TD;"
print "    size=\"8,5\""
print "    node [shape=doublecircle]; first;"
print "    node [shape=box]; "

for name, state in patterns['intro'].items():
    tprob = 0
    desc = state['description']
    print "    %s [label=\"%s\"];" % (name, state['description'])

    for nstate in state['next']:
        tprob += nstate['prob']
    for nstate in state['next']:
        prob = int(100. * nstate['prob'] / tprob)
        # print "    %s -> %s [label=\"%s\"];" % (desc, nstate['next'], prob)
        print "    %s -> %s [label=\"%s\"];" % (name, nstate['next'], prob)

print '}'
