PGDMP  2                    |            apis_trabalho2    16.3    16.3 "               0    0    ENCODING    ENCODING        SET client_encoding = 'UTF8';
                      false            	           0    0 
   STDSTRINGS 
   STDSTRINGS     (   SET standard_conforming_strings = 'on';
                      false            
           0    0 
   SEARCHPATH 
   SEARCHPATH     8   SELECT pg_catalog.set_config('search_path', '', false);
                      false                       1262    16619    apis_trabalho2    DATABASE     �   CREATE DATABASE apis_trabalho2 WITH TEMPLATE = template0 ENCODING = 'UTF8' LOCALE_PROVIDER = libc LOCALE = 'Portuguese_Brazil.1252';
    DROP DATABASE apis_trabalho2;
                postgres    false            �            1259    16621 	   diretores    TABLE     �   CREATE TABLE public.diretores (
    id integer NOT NULL,
    nome character varying(100) NOT NULL,
    nacionalidade character varying(50) NOT NULL
);
    DROP TABLE public.diretores;
       public         heap    postgres    false            �            1259    16620    diretores_id_seq    SEQUENCE     �   CREATE SEQUENCE public.diretores_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 '   DROP SEQUENCE public.diretores_id_seq;
       public          postgres    false    216                       0    0    diretores_id_seq    SEQUENCE OWNED BY     E   ALTER SEQUENCE public.diretores_id_seq OWNED BY public.diretores.id;
          public          postgres    false    215            �            1259    16628    filmes    TABLE     �   CREATE TABLE public.filmes (
    id integer NOT NULL,
    nome character varying(100) NOT NULL,
    ano integer NOT NULL,
    disponivel boolean DEFAULT true,
    dataentrega date,
    diretores character varying(100)[]
);
    DROP TABLE public.filmes;
       public         heap    postgres    false            �            1259    16627    filmes_id_seq    SEQUENCE     �   CREATE SEQUENCE public.filmes_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 $   DROP SEQUENCE public.filmes_id_seq;
       public          postgres    false    218                       0    0    filmes_id_seq    SEQUENCE OWNED BY     ?   ALTER SEQUENCE public.filmes_id_seq OWNED BY public.filmes.id;
          public          postgres    false    217            �            1259    16647 	   retiradas    TABLE     �   CREATE TABLE public.retiradas (
    id integer NOT NULL,
    id_usuario integer NOT NULL,
    id_filme integer NOT NULL,
    data_retirada timestamp without time zone DEFAULT CURRENT_TIMESTAMP
);
    DROP TABLE public.retiradas;
       public         heap    postgres    false            �            1259    16646    retiradas_id_seq    SEQUENCE     �   CREATE SEQUENCE public.retiradas_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 '   DROP SEQUENCE public.retiradas_id_seq;
       public          postgres    false    222                       0    0    retiradas_id_seq    SEQUENCE OWNED BY     E   ALTER SEQUENCE public.retiradas_id_seq OWNED BY public.retiradas.id;
          public          postgres    false    221            �            1259    16638    usuarios    TABLE     �   CREATE TABLE public.usuarios (
    id integer NOT NULL,
    nome character varying(100) NOT NULL,
    matricula integer NOT NULL,
    telefone bigint NOT NULL
);
    DROP TABLE public.usuarios;
       public         heap    postgres    false            �            1259    16637    usuarios_id_seq    SEQUENCE     �   CREATE SEQUENCE public.usuarios_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 &   DROP SEQUENCE public.usuarios_id_seq;
       public          postgres    false    220                       0    0    usuarios_id_seq    SEQUENCE OWNED BY     C   ALTER SEQUENCE public.usuarios_id_seq OWNED BY public.usuarios.id;
          public          postgres    false    219            _           2604    16624    diretores id    DEFAULT     l   ALTER TABLE ONLY public.diretores ALTER COLUMN id SET DEFAULT nextval('public.diretores_id_seq'::regclass);
 ;   ALTER TABLE public.diretores ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    215    216    216            `           2604    16631 	   filmes id    DEFAULT     f   ALTER TABLE ONLY public.filmes ALTER COLUMN id SET DEFAULT nextval('public.filmes_id_seq'::regclass);
 8   ALTER TABLE public.filmes ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    217    218    218            c           2604    16650    retiradas id    DEFAULT     l   ALTER TABLE ONLY public.retiradas ALTER COLUMN id SET DEFAULT nextval('public.retiradas_id_seq'::regclass);
 ;   ALTER TABLE public.retiradas ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    222    221    222            b           2604    16641    usuarios id    DEFAULT     j   ALTER TABLE ONLY public.usuarios ALTER COLUMN id SET DEFAULT nextval('public.usuarios_id_seq'::regclass);
 :   ALTER TABLE public.usuarios ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    219    220    220            �          0    16621 	   diretores 
   TABLE DATA           <   COPY public.diretores (id, nome, nacionalidade) FROM stdin;
    public          postgres    false    216   �$                 0    16628    filmes 
   TABLE DATA           S   COPY public.filmes (id, nome, ano, disponivel, dataentrega, diretores) FROM stdin;
    public          postgres    false    218   �$                 0    16647 	   retiradas 
   TABLE DATA           L   COPY public.retiradas (id, id_usuario, id_filme, data_retirada) FROM stdin;
    public          postgres    false    222   �$                 0    16638    usuarios 
   TABLE DATA           A   COPY public.usuarios (id, nome, matricula, telefone) FROM stdin;
    public          postgres    false    220   �$                  0    0    diretores_id_seq    SEQUENCE SET     >   SELECT pg_catalog.setval('public.diretores_id_seq', 5, true);
          public          postgres    false    215                       0    0    filmes_id_seq    SEQUENCE SET     ;   SELECT pg_catalog.setval('public.filmes_id_seq', 3, true);
          public          postgres    false    217                       0    0    retiradas_id_seq    SEQUENCE SET     ?   SELECT pg_catalog.setval('public.retiradas_id_seq', 21, true);
          public          postgres    false    221                       0    0    usuarios_id_seq    SEQUENCE SET     =   SELECT pg_catalog.setval('public.usuarios_id_seq', 3, true);
          public          postgres    false    219            f           2606    16626    diretores diretores_pkey 
   CONSTRAINT     V   ALTER TABLE ONLY public.diretores
    ADD CONSTRAINT diretores_pkey PRIMARY KEY (id);
 B   ALTER TABLE ONLY public.diretores DROP CONSTRAINT diretores_pkey;
       public            postgres    false    216            h           2606    16636    filmes filmes_pkey 
   CONSTRAINT     P   ALTER TABLE ONLY public.filmes
    ADD CONSTRAINT filmes_pkey PRIMARY KEY (id);
 <   ALTER TABLE ONLY public.filmes DROP CONSTRAINT filmes_pkey;
       public            postgres    false    218            l           2606    16653    retiradas retiradas_pkey 
   CONSTRAINT     V   ALTER TABLE ONLY public.retiradas
    ADD CONSTRAINT retiradas_pkey PRIMARY KEY (id);
 B   ALTER TABLE ONLY public.retiradas DROP CONSTRAINT retiradas_pkey;
       public            postgres    false    222            j           2606    16645    usuarios usuarios_pkey 
   CONSTRAINT     T   ALTER TABLE ONLY public.usuarios
    ADD CONSTRAINT usuarios_pkey PRIMARY KEY (id);
 @   ALTER TABLE ONLY public.usuarios DROP CONSTRAINT usuarios_pkey;
       public            postgres    false    220            m           2606    16659 !   retiradas retiradas_id_filme_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public.retiradas
    ADD CONSTRAINT retiradas_id_filme_fkey FOREIGN KEY (id_filme) REFERENCES public.filmes(id);
 K   ALTER TABLE ONLY public.retiradas DROP CONSTRAINT retiradas_id_filme_fkey;
       public          postgres    false    222    4712    218            n           2606    16654 #   retiradas retiradas_id_usuario_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public.retiradas
    ADD CONSTRAINT retiradas_id_usuario_fkey FOREIGN KEY (id_usuario) REFERENCES public.usuarios(id);
 M   ALTER TABLE ONLY public.retiradas DROP CONSTRAINT retiradas_id_usuario_fkey;
       public          postgres    false    4714    222    220            �      x������ � �            x������ � �            x������ � �            x������ � �     