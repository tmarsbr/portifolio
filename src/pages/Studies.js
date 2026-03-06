import React, { useState } from 'react';
import {
    Box,
    Container,
    Typography,
    Grid,
    Card,
    CardContent,
    CardMedia,
    Chip,
    Button,
    alpha,
    Tabs,
    Tab,
} from '@mui/material';
import { Helmet } from 'react-helmet';
import {
    GitHub,
    MenuBook,
    Science,
    Code,
    School,
} from '@mui/icons-material';

import { studies, COURSES, FORMATIONS, getCoursesByFormation, studiesPageConfig } from '../config/studies';
import { personalInfo } from '../config/portfolio';

/* ── glass base ──────────────────────────────────────── */
const glass = {
    background: 'rgba(255,255,255,0.03)',
    backdropFilter: 'blur(16px)',
    border: '1px solid rgba(255,255,255,0.06)',
    borderRadius: '16px',
};

/* ── type neon map ───────────────────────────────────── */
const typeNeon = {
    'Laboratório': '#00d4ff',
    'Projeto':     '#00e676',
    'Estudo de Caso': '#ffd600',
};
const getTypeColor = (type) => typeNeon[type] || '#007bff';

/* ── stat neon map ───────────────────────────────────── */
const statNeon = { primary: '#007bff', secondary: '#a855f7', info: '#00d4ff', success: '#00e676' };

/**
 * Studies — Página de Estudos (glass dark design)
 * Formações > Cursos > Labs/Projetos
 */
const Studies = () => {
    const [selectedFormation, setSelectedFormation] = useState('engenharia-dados-4');
    const [selectedCourse, setSelectedCourse] = useState('iac-terraform');

    const placeholderImage = "data:image/svg+xml,%3csvg width='100%25' height='100%25' xmlns='http://www.w3.org/2000/svg'%3e%3crect width='100%25' height='100%25' fill='%230d1117'/%3e%3ctext x='50%25' y='50%25' text-anchor='middle' dy='.3em' font-family='monospace' font-size='12' fill='%23475569'%3eData Engineering%3c/text%3e%3c/svg%3e";

    /* ── helpers ──────────────────────────────────────── */
    const getFilteredStudies = () => {
        const courseIds = getCoursesByFormation(selectedFormation).map(c => c.id);
        return studies.filter(s => courseIds.includes(s.course) && s.course === selectedCourse);
    };
    const filteredStudies = getFilteredStudies();
    const availableCourses = getCoursesByFormation(selectedFormation);

    const getStudiesByCourse = (cid) => studies.filter(s => s.course === cid);

    const getStudiesForFormation = (fid) => {
        const cids = getCoursesByFormation(fid).map(c => c.id);
        return studies.filter(s => cids.includes(s.course));
    };

    const totalStudies = studies.length;
    const labCount = studies.filter(s => s.type === 'Laboratório').length;
    const projectCount = studies.filter(s => s.type === 'Projeto').length;

    /* ── card style ──────────────────────────────────── */
    const cardStyle = {
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        overflow: 'hidden',
        ...glass,
        transition: 'all 0.35s ease',
        '&:hover': {
            transform: 'translateY(-8px)',
            boxShadow: '0 16px 40px rgba(0,123,255,0.12)',
            borderColor: 'rgba(0,123,255,0.35)',
            '& .study-image': { transform: 'scale(1.06)' },
        },
    };

    const handleFormationChange = (_, v) => {
        setSelectedFormation(v);
        const first = getCoursesByFormation(v)[0];
        setSelectedCourse(first?.id || 'iac-terraform');
    };
    const handleCourseChange = (_, v) => setSelectedCourse(v);

    /* ── render study card (reusable) ────────────────── */
    const renderCard = (study, course, imgH = 180) => (
        <Card sx={cardStyle}>
            <Box sx={{ position: 'relative', height: imgH, overflow: 'hidden' }}>
                <CardMedia
                    component="img"
                    image={study.image || placeholderImage}
                    alt={study.title}
                    className="study-image"
                    onError={(e) => { e.target.src = placeholderImage; }}
                    sx={{ height: '100%', objectFit: 'cover', transition: 'transform 0.4s ease' }}
                />
                <Box sx={{ position: 'absolute', inset: 0, background: 'linear-gradient(180deg, transparent 30%, rgba(0,0,0,0.85) 100%)' }} />
                <Chip
                    label={study.type}
                    size="small"
                    sx={{
                        position: 'absolute',
                        top: 12,
                        left: 12,
                        backgroundColor: `${getTypeColor(study.type)}dd`,
                        color: '#fff',
                        fontWeight: 700,
                        fontSize: '0.72rem',
                        fontFamily: '"IBM Plex Mono", monospace',
                    }}
                />
            </Box>

            <CardContent sx={{ p: 3, flex: 1, display: 'flex', flexDirection: 'column' }}>
                <Typography variant="h6" sx={{ fontWeight: 700, mb: 2, lineHeight: 1.3, color: '#e2e8f0' }}>
                    {study.title}
                </Typography>

                <Typography variant="body2" sx={{ color: '#94a3b8', mb: 3, flex: 1, lineHeight: 1.6 }}>
                    {study.description}
                </Typography>

                <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.6, mb: 2 }}>
                    {study.technologies.slice(0, 4).map((tech, i) => (
                        <Chip
                            key={i}
                            label={tech}
                            size="small"
                            sx={{
                                height: 24,
                                fontSize: '0.68rem',
                                fontFamily: '"IBM Plex Mono", monospace',
                                backgroundColor: alpha(course?.color || '#007bff', 0.12),
                                color: course?.color || '#007bff',
                                fontWeight: 600,
                                border: `1px solid ${alpha(course?.color || '#007bff', 0.2)}`,
                            }}
                        />
                    ))}
                </Box>

                <Button
                    startIcon={<GitHub />}
                    href={study.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    sx={{
                        mt: 'auto',
                        borderRadius: '10px',
                        textTransform: 'none',
                        fontWeight: 600,
                        fontFamily: '"IBM Plex Mono", monospace',
                        border: '1.5px solid #007bff',
                        color: '#007bff',
                        transition: 'all .3s ease',
                        '&:hover': { background: 'rgba(0,123,255,0.1)', boxShadow: '0 0 20px rgba(0,123,255,0.2)' },
                    }}
                >
                    Ver Mais
                </Button>
            </CardContent>
        </Card>
    );

    return (
        <>
            <Helmet>
                <title>Estudos - {personalInfo.name} | Formação Engenharia de Dados</title>
                <meta name="description" content={studiesPageConfig.description} />
            </Helmet>

            {/* ── Hero ────────────────────────────────── */}
            <Box sx={{ pt: { xs: 14, md: 18 }, pb: { xs: 6, md: 10 }, position: 'relative', overflow: 'hidden' }}>
                {/* radial glows */}
                <Box sx={{ position: 'absolute', top: '10%', right: '-5%', width: 500, height: 500, borderRadius: '50%', background: 'radial-gradient(circle, rgba(0,123,255,0.07) 0%, transparent 70%)', filter: 'blur(50px)' }} />
                <Box sx={{ position: 'absolute', bottom: '10%', left: '-5%', width: 400, height: 400, borderRadius: '50%', background: 'radial-gradient(circle, rgba(168,85,247,0.06) 0%, transparent 70%)', filter: 'blur(50px)' }} />

                <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
                    <Box sx={{ textAlign: 'center', mb: 6 }}>
                        {/* code label */}
                        <Typography sx={{ fontFamily: '"IBM Plex Mono", monospace', fontSize: '0.75rem', fontWeight: 600, letterSpacing: 3, color: '#007bff', mb: 2 }}>
                            {'// estudos'}
                        </Typography>

                        {/* Institution Badges */}
                        <Box sx={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: 1.5, mb: 3 }}>
                            {studiesPageConfig.institutions?.map((inst, idx) => (
                                <Box
                                    key={idx}
                                    sx={{
                                        display: 'inline-flex',
                                        alignItems: 'center',
                                        gap: 1,
                                        px: 2,
                                        py: 0.5,
                                        borderRadius: '10px',
                                        background: 'rgba(0,123,255,0.08)',
                                        border: '1px solid rgba(0,123,255,0.18)',
                                    }}
                                >
                                    <Typography sx={{ fontSize: 16 }}>{inst.icon}</Typography>
                                    <Typography variant="caption" sx={{ fontWeight: 700, letterSpacing: 1, color: '#007bff', textTransform: 'uppercase', fontFamily: '"IBM Plex Mono", monospace' }}>
                                        {inst.name}
                                    </Typography>
                                </Box>
                            ))}
                        </Box>

                        <Typography
                            variant="h2"
                            component="h1"
                            sx={{
                                fontFamily: '"IBM Plex Mono", monospace',
                                fontWeight: 800,
                                mb: 2,
                                background: 'linear-gradient(135deg, #e2e8f0 0%, #007bff 50%, #a855f7 100%)',
                                WebkitBackgroundClip: 'text',
                                WebkitTextFillColor: 'transparent',
                                letterSpacing: '-0.02em',
                                fontSize: { xs: '2.2rem', md: '3.5rem' },
                            }}
                        >
                            {studiesPageConfig.title}
                        </Typography>

                        <Typography variant="h5" sx={{ color: '#94a3b8', mb: 2, fontWeight: 600, fontFamily: '"IBM Plex Mono", monospace', fontSize: { xs: '0.9rem', md: '1.1rem' } }}>
                            {studiesPageConfig.subtitle}
                        </Typography>

                        <Typography variant="body1" sx={{ fontSize: '1rem', color: '#94a3b8', maxWidth: 800, mx: 'auto', lineHeight: 1.7, mb: 5 }}>
                            {studiesPageConfig.description}
                        </Typography>

                        {/* stats */}
                        <Grid container spacing={2} justifyContent="center" sx={{ mb: 4 }}>
                            {[
                                { number: totalStudies, label: 'Total', icon: <MenuBook />, color: 'primary' },
                                { number: COURSES.length, label: 'Cursos', icon: <School />, color: 'secondary' },
                                { number: labCount, label: 'Labs', icon: <Science />, color: 'info' },
                                { number: projectCount, label: 'Projetos', icon: <Code />, color: 'success' },
                            ].map((stat, index) => {
                                const nc = statNeon[stat.color] || '#007bff';
                                return (
                                    <Grid item xs={6} sm={3} key={index}>
                                        <Box
                                            sx={{
                                                p: 2,
                                                borderRadius: '14px',
                                                ...glass,
                                                transition: 'all 0.3s ease',
                                                '&:hover': { transform: 'translateY(-3px)', borderColor: `${nc}50` },
                                            }}
                                        >
                                            <Box sx={{ color: nc, mb: 0.5 }}>{stat.icon}</Box>
                                            <Typography variant="h4" sx={{ fontWeight: 800, color: nc, fontFamily: '"IBM Plex Mono", monospace' }}>{stat.number}</Typography>
                                            <Typography variant="caption" sx={{ textTransform: 'uppercase', letterSpacing: 1, fontWeight: 600, color: '#64748b' }}>
                                                {stat.label}
                                            </Typography>
                                        </Box>
                                    </Grid>
                                );
                            })}
                        </Grid>
                    </Box>
                </Container>
            </Box>

            {/* ── Navigation Tabs ─────────────────────── */}
            <Box sx={{ background: 'rgba(5,10,20,0.92)', borderBottom: '1px solid rgba(255,255,255,0.06)' }}>
                {/* Formation Tabs - Nível 1 */}
                <Box sx={{ py: 1.5, background: 'rgba(5,10,20,0.98)', backdropFilter: 'blur(14px)', borderBottom: '1px solid rgba(255,255,255,0.04)' }}>
                    <Container maxWidth="lg">
                        <Tabs
                            value={selectedFormation}
                            onChange={handleFormationChange}
                            variant="scrollable"
                            scrollButtons="auto"
                            sx={{
                                minHeight: 44,
                                '& .MuiTab-root': { textTransform: 'none', fontWeight: 700, fontSize: '0.9rem', minHeight: 44, px: 2.5, color: '#94a3b8', fontFamily: '"IBM Plex Mono", monospace' },
                                '& .Mui-selected': { color: '#007bff !important' },
                                '& .MuiTabs-indicator': { backgroundColor: '#007bff' },
                            }}
                        >
                            {FORMATIONS.map((formation) => (
                                <Tab key={formation.id} label={`${formation.icon} ${formation.name} (${getStudiesForFormation(formation.id).length})`} value={formation.id} />
                            ))}
                        </Tabs>

                        {/* Sub-Formações */}
                        {FORMATIONS.find(f => f.id === selectedFormation)?.subFormations && (
                            <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, mt: 1.5, pl: 1 }}>
                                <Typography variant="caption" sx={{ color: '#64748b', fontWeight: 600, alignSelf: 'center', mr: 0.5, fontFamily: '"IBM Plex Mono", monospace' }}>
                                    Inclui:
                                </Typography>
                                {FORMATIONS.find(f => f.id === selectedFormation)?.subFormations.map((sub) => (
                                    <Chip
                                        key={sub.id}
                                        label={`${sub.icon} ${sub.name}`}
                                        size="small"
                                        variant="outlined"
                                        sx={{ fontSize: '0.7rem', height: 24, borderColor: 'rgba(0,123,255,0.25)', color: '#94a3b8', fontFamily: '"IBM Plex Mono", monospace' }}
                                    />
                                ))}
                            </Box>
                        )}
                    </Container>
                </Box>

                {/* Course Tabs - Nível 2 */}
                <Box sx={{ py: 1, background: 'rgba(13,17,23,0.95)', backdropFilter: 'blur(14px)' }}>
                    <Container maxWidth="lg">
                        <Tabs
                            value={selectedCourse}
                            onChange={handleCourseChange}
                            variant="scrollable"
                            scrollButtons="auto"
                            sx={{
                                minHeight: 36,
                                '& .MuiTab-root': { textTransform: 'none', fontWeight: 600, fontSize: '0.8rem', minHeight: 36, px: 1.5, py: 0.5, color: '#64748b', fontFamily: '"IBM Plex Mono", monospace' },
                                '& .Mui-selected': { color: '#a855f7 !important' },
                                '& .MuiTabs-indicator': { backgroundColor: '#a855f7' },
                            }}
                        >
                            {availableCourses.map((course) => (
                                <Tab
                                    key={course.id}
                                    label={`${course.icon} ${course.name} (${getStudiesByCourse(course.id).length})`}
                                    value={course.id}
                                    sx={{ '&.Mui-selected': { color: `${course.color} !important` } }}
                                />
                            ))}
                        </Tabs>
                    </Container>
                </Box>
            </Box>

            {/* ── Studies Content ─────────────────────── */}
            <Box sx={{ py: 6, minHeight: '60vh' }}>
                <Container maxWidth="lg">
                    {selectedCourse === 'all' ? (
                        availableCourses.map((course) => {
                            const courseStudies = getStudiesByCourse(course.id);
                            if (courseStudies.length === 0) return null;
                            return (
                                <Box key={course.id} sx={{ mb: 8 }}>
                                    {/* Course Header */}
                                    <Box sx={{ mb: 4 }}>
                                        <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 1 }}>
                                            <Typography variant="h4" sx={{ fontSize: '1.5rem' }}>{course.icon}</Typography>
                                            <Typography variant="h5" sx={{ fontWeight: 700, color: course.color, fontFamily: '"IBM Plex Mono", monospace' }}>
                                                {course.name}
                                            </Typography>
                                            <Chip
                                                label={`${courseStudies.length} estudos`}
                                                size="small"
                                                sx={{ backgroundColor: alpha(course.color, 0.12), color: course.color, fontWeight: 600, border: `1px solid ${alpha(course.color, 0.2)}`, fontFamily: '"IBM Plex Mono", monospace' }}
                                            />
                                        </Box>
                                        <Box sx={{ ml: 6, mt: 1 }}>
                                            <Typography variant="subtitle1" sx={{ color: '#e2e8f0', fontWeight: 600, mb: 1 }}>{course.fullName}</Typography>
                                            <Typography variant="body1" sx={{ color: '#94a3b8', whiteSpace: 'pre-line' }}>{course.description}</Typography>
                                        </Box>
                                        <Box sx={{ mt: 2, height: '1px', background: `linear-gradient(90deg, ${alpha(course.color, 0.3)}, transparent)` }} />
                                    </Box>

                                    <Grid container spacing={3}>
                                        {courseStudies.map((study) => (
                                            <Grid item xs={12} sm={6} lg={4} key={study.id}>
                                                {renderCard(study, course, 160)}
                                            </Grid>
                                        ))}
                                    </Grid>
                                </Box>
                            );
                        })
                    ) : (
                        <>
                            {COURSES.filter(c => c.id === selectedCourse).map((course) => (
                                <Box key={course.id} sx={{ mb: 4 }}>
                                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 3 }}>
                                        <Typography variant="h3" sx={{ fontSize: '2rem' }}>{course.icon}</Typography>
                                        <Box>
                                            <Typography variant="h4" sx={{ fontWeight: 700, color: course.color, mb: 1, fontFamily: '"IBM Plex Mono", monospace' }}>
                                                {course.name}
                                            </Typography>
                                            <Typography variant="subtitle1" sx={{ color: '#e2e8f0', fontWeight: 600, mb: 1 }}>{course.fullName}</Typography>
                                            <Typography variant="body1" sx={{ color: '#94a3b8', whiteSpace: 'pre-line' }}>{course.description}</Typography>
                                        </Box>
                                    </Box>
                                    <Box sx={{ mb: 4, height: '1px', background: `linear-gradient(90deg, ${alpha(course.color, 0.35)}, transparent)` }} />
                                </Box>
                            ))}

                            <Grid container spacing={3}>
                                {filteredStudies.map((study) => {
                                    const course = COURSES.find(c => c.id === study.course);
                                    return (
                                        <Grid item xs={12} sm={6} lg={4} key={study.id}>
                                            {renderCard(study, course)}
                                        </Grid>
                                    );
                                })}
                            </Grid>
                        </>
                    )}
                </Container>
            </Box>
        </>
    );
};

export default Studies;
