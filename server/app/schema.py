import graphene
from graphene_django import DjangoObjectType


class Query(graphene.ObjectType):
    hello = graphene.String()

    def resolve_hello(self, info, **kwargs):
        return 'world'
